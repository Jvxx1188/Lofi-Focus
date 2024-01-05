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
    private weight;
   constructor(){
    this.localtime = new Date()
    this.color = " white "
    this.font = " font-sans "
    this.size = " text-6xl "
    this.position = " text-end self-end "
    this.weight = " font-semibold "
   }
   
   public Set = {
       color : (value : string) =>{
        this.color = " "+ value+" ";
        this.UpdateClock()
        console.log(this.color)
       },
       font : (value : string) => {
        this.font = value 
        this.UpdateClock()
       }
       ,
       size : (value : string) =>{
        this.size = value
        this.UpdateClock()
       } ,
       position : (value : string) => {
        this.position = value 
          this.UpdateClock()
          
       } ,
       weight : (value : string) => {
        this.weight = value 
          this.UpdateClock()
          
       } 
   }
   
    //aqui vai ter uma função que seta de forma mais facil somente oque queremos|

    //precisamos pegar o horario atual somente uma vez(getcurrenttime)

    //precisamos do componente render (clock)
    
    //precisamos da função de renderizacão (render)
    
    //precisamos passar os valores para o clock


   public UpdateClock =() =>{
   //o horario eu pego dali de cima
    console.log("renderizado")
  this.ClockRender.render(
       <Clock time={this.localtime} color={this.color} font={this.font} size={this.size} position={this.position} weight={this.weight}/>

    //la no meu layout eu vou ter um padrao certinho pra mandar nomes que são reconhecidos na div

    //aqui é o render
    )}    
}
const clockcontroller = new ClockController()
export default clockcontroller;