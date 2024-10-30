import React, { useState } from 'react';
import axios from 'axios';
// import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/usuarios/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login bem-sucedido');
        } catch (error) {
            alert('Erro ao fazer login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login;
