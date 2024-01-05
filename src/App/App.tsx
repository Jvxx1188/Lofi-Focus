import React from 'react'
import NavigationBarLayout from './Content/Layers/NavigationBarLayer/NavigationBarComponent'
import LayoutComponent from './Content/Layers/LayoutLayer/LayoutComponent'
import Clock from './Content/Layers/ClockLayer/ClockComponent'
import { cartegories } from './Content/Cases & Controlers/Music/Controler/musicas/selected'


function App() {
return (
    <>
    <Clock/>
    <LayoutComponent/>
    <NavigationBarLayout/>
    </>
    
  )
}

export default App

