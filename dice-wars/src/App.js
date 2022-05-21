import './App.css';
import Die from './components/Die/Die';
import React from "react";
import ReactDOM from "react-dom"
import RollArea from './components/RollArea/RollArea';
import PlayerDash from './components/PlayerDash/PlayerDash';
import Landing from './components/Landing/Landing';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayLanding: "none",
      displayMain: "flex",
      players: 1
    }
  }

  initSingle(){
    this.setState({players: 1, displayLanding: "none", displayMain:"flex"})
  

}
initTwoPlayers(){
    this.setState({players: 2 ,displayLanding:"none", displayMain: "flex"})
}


  render(){
  return (
    <div className="App">
   
  
      <div className='container'>

      <div className='landing-page' style={{display: this.state.displayLanding}}>
        
                <div> Title </div>
                <div className='landing-btn-container'> 
                    <button onClick={()=>{this.initSingle()}} >SINGLE PLAYER</button>
                    <button onClick={()=>{this.initTwoPlayers()}}>HEAD TO HEAD </button>
                 </div>
            </div>

        <RollArea display={this.state.displayMain} players={this.state.players} />

        
       
      </div>

    
    
 
    </div>
  );
  }
}

export default App;
