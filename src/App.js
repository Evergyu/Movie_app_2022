import React from 'react';

function Food(props){
  return (
    <div>
      <h1>I love {props.name} </h1>
      <img src={props.image} alt={props.name}/>
      </div>
  ) 
}

const foodIlike=[
  {name : 'kimchi', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K38fMEczTi_WllQaQXvDgAHaGp%26pid%3DApi&f=1'},
  {name : 'ddeok-bbok-i', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kMNtwT_3Sp-W-yqYfPcRRAHaHa%26pid%3DApi&f=1'}

] 

function renderfood(dish){
  return (<Food name={dish.name} image={dish.image}/>)
}

function App() {
  return (
    <div>
      {foodIlike.map(renderfood)}
    </div>
  );
}

export default App;
