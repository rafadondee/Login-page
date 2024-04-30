import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const logar = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
     username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Mover para fora do handleLogin

  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      alert('Login bem-sucedido!'); // Exibe um alerta para indicar sucesso
      navigate('/'); // Redireciona para a página inicial
    } catch (error) {
      console.error('Erro ao se logar:', error);
      alert('Erro ao se logar!'); // Exibe um alerta para erro
    }
  };
  

  const handleClick = () => {
    navigate('/cadastro'); // Agora está no escopo correto
  };

  return (
    
    <div>
          <div className="rectangulo"> {/* Aplica a classe CSS 'rectangulo' */}
    </div>
      <h1 className='h1Login'>Login</h1>
      <form>
        <label className='usernameLogin'>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className='passwordLogin'>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className='botaoLogin' type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button className= 'botaoLogin2' onClick={handleClick}>Cadastrar</button> 
    </div>
  );
}

export default Login;
