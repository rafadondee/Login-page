import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const irPara= useNavigate();
  
  const handleClick = () => {
    irPara('/');
  };
  
  return (
    <div>
      <h1 className='h1-home'>Welcome</h1>      
      <button onClick= {handleClick}>Deslogar</button>
    </div>
  );
}
export default Home;
