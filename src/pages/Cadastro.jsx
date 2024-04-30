import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importação correta


function Cadastro() {

    const [novoUsuario, setNovoUsuario] = useState({
      placa: 'username',
      montadora: 'password',
    });  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovoUsuario((prevUsuario) => ({
          ...prevUsuario,
          [name]: value,
        }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:8090/api/cadastro', novoUsuario);
          setNovoUsuario({
            username: '',
            password: '',
          });
          alert('Usuário criado com sucesso!'); // Exibe uma mensagem de sucesso
          irPara('/'); // Redireciona para a página inicial
        } catch (error) {
          console.error('Erro ao criar usuário:', error);
          alert('Erro ao criar usuário!'); // Exibe uma mensagem de erro
        }
      };
      
      
      

  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };
  return (
    <div>
      <h1>Página de Cadastro :(</h1>   
      <form onSubmit={handleSubmit}>
      {/* Campo para o usuário */}
      <input
        type="text"
        name="username"
        placeholder="Usuário"
        value={novoUsuario.username}
        onChange={handleInputChange}
      />
      {/* Campo para a senha */}
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={novoUsuario.password}
        onChange={handleInputChange}
      />
    
      {/* Botão de envio do formulário */}
      <button type="submit">Adicionar Usuário</button>
    </form>



      <button onClick= {handleClick}>Voltar</button>
    </div>
  );
}
export default Cadastro;
