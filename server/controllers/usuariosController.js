const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.execute('INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)', 
        [name, email, hashedPassword]
    )
    .then(() => res.status(201).json({ message: 'Usuário registrado!' }))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.execute('SELECT * FROM usuarios WHERE email = ?', [email])
    .then(([rows]) => {
        if (rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
        const user = rows[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!isMatch) return res.status(401).json({ message: 'Senha incorreta' });
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
