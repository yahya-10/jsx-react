import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import  ShaneMcGowan from "./Images/ShaneMcGowan.jpg";
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{maxWidth: '100vw'}}>
          <h1 className="title red">Yahya Akermi</h1>
          <br />
          <img src={ShaneMcGowan}  />
          <br />
          <img src="/NewZealand.png"  />
          <ReactPlayer url="https://www.youtube.com/watch?v=VnT7pT6zCcA" style={{marginLeft:400}}></ReactPlayer>  
          </div>
      </div>  
    </div>
  );
}

export default App;
