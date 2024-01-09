import React from 'react'
import NavigationBarLayout from './Content/Layers/NavigationBarLayer/NavigationBarComponent'
import LayoutComponent from './Content/Layers/LayoutLayer/LayoutComponent'
import Clock from './Content/Layers/ClockLayer/ClockComponent'
import MusicComponent from './Content/Layers/MusicLayer/MusicComponent'


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

