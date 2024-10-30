import React, { useState } from 'react';
import axios from 'axios';
// import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/usuarios/register', { name, email, password });
            alert('Registro bem-sucedido');
        } catch (error) {
            alert('Erro ao fazer registro');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar</h2>
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Registrar</button>
        </form>
    );
}

export default Register;
