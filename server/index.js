const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/usuariosRoutes');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/usuarios', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
