import  Clock from "./Clock/ClockComponente"
import React from 'react';
class ClockController{
    //vai ser setado no inicio
   private localtime;
    public ClockRender;
    private color;
    private font;
    private size;
    private position;
   constructor(){
    this.localtime = new Date()
    this.color = "text-white"
    this.font = "Arial"
    this.size = "50px"
    this.position = "center"
   }
   
   public Set = {
       color : (value : string) => this.color = value,
       font : (value : string) => this.font = value,
       size : (value : string) => this.size = value,
       position : (value : string) => this.position = value
   }
   
    //aqui vai ter uma função que seta de forma mais facil somente oque queremos|

    //precisamos pegar o horario atual somente uma vez(getcurrenttime)

    //precisamos do componente render (clock)
    
    //precisamos da função de renderizacão (render)
    
    //precisamos passar os valores para o clock


   public UpdateClock =(color : string,font : string,size : string, position : string) =>{
   //o horario eu pego dali de cima
    console.log("renderizado")
  this.ClockRender.render(
       <Clock time={this.localtime} color={color} font={font} size={size} position={position}/>

    //la no meu layout eu vou ter um padrao certinho pra mandar nomes que são reconhecidos na div

    //aqui é o render
    )}    
}
const clockcontroller = new ClockController()
export default clockcontroller;