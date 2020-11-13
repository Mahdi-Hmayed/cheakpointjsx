
import './App.css';
import React from "react"
import "./style.css"
import image from "./mia.jpg"
import jorden from "./jorden.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

<h1 className="title">Your name here</h1>

<br />

<img src={image} />

<br />

<img src={jorden} />

</div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/EsceiAe1B6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
}

export default App;
