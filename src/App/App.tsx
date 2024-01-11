import React from 'react'
import NavigationBarLayout from './Content/Layers/NavigationBarLayer/NavigationBarComponent'
import LayoutComponent from './Content/Layers/LayoutLayer/LayoutComponent'
import Clock from './Content/Layers/ClockLayer/ClockComponent'
import MusicComponent from './Content/Layers/MusicLayer/MusicComponent'
import { musiccontroller } from './Content/Cases & Controlers/Music/Controler/MusicControler'
window.onload = function() {
  // O código aqui será executado quando a página e todos os recursos forem carregados
  console.log('A página foi completamente carregada.');
musiccontroller.CreateYoutube()
};

function App() {
return (
    <>
    
    <MusicComponent/>
    <Clock/>
    <LayoutComponent/>
    <NavigationBarLayout/>
    </>
    
  )
}

export default App

