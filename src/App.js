import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
// import './myVideo.mp4';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{maxWidth: '100vw' , backgroundColor: 'ThreeDLightShadow'}}>
          <h1 className="title red">Yahya Akermi</h1>
          <br />
          <img src="/ShaneMcGowan.jpg" />
          <br />
          <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="/myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
