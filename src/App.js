import React from 'react';
import './App.css';
import ProfilPhoto from './Profil/ProfilPhoto'
import FullName from './Profil/FullName'
import Adress from './Profil/Adress'


function App() {
  return (
    <div className="App">
    <h1>Profil Nabil Messaoud</h1>
    <div className="info">
   <ProfilPhoto />
   <div className="contact" >
   <FullName/>
   <Adress/>
   </div>
   </div>
    </div>
  );
}

export default App;
