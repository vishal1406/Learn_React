import React, { Component } from 'react';
import './App.css';
function App(){
 const obj1 = [
  {
    id: 1,
    title: "BOX-1",
    desc : "Hey guys whats up my name is Vishal kumar"
  },
  {
    id: 2,
    title: "BOX-2",
    desc : "Hey guys whats up my name is Bittu Kumar"
  },
  {
    id: 3,
    title: "BOX-3",
    desc : "Hey guys whats up my name is Abhay kumar"
  }
]

const cards = obj1.map((item,pos)=>{
  console.log(item);

  return (
    <div className="Card" key={item.id}>
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
    </div>
  )
})
  return(
    <div className="App">
    {cards}
    </div>
  )
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, My name is Vishal</h1>
//         <h2>Job: Software Engineer</h2>
//         <h2>Age: N/A</h2>
//       </div> 
//     );
//   }
// }

export default App;