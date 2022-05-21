import React, { Component } from 'react';
import ReactDOM from "react-dom"
import "./Landing.css"
import RollArea from '../RollArea/RollArea';

class Landing extends Component {
    constructor(props){
        super(props);
        
        this.state={
            single: false,
            displayLanding: 'none',
            displayMain: "block"
        }
    }


    initSingle(){
        this.setState({single: true, displayLanding: "none", displayMain: "block"})

    }
    initTwoPlayers(){
        this.setState({displayLanding:"none", displayMain: "block"})
    }

    render() {
        return (
            <>
            <div className='landing-page' style={{display: this.state.displayLanding}}>
                <div> Title </div>
                <div className='landing-btn-container'> 
                    <button onClick={()=>{this.initSingle()}} >SINGLE PLAYER</button>
                    <button onClick={()=>{this.initTwoPlayers()}}>HEAD TO HEAD </button>
                 </div>
            </div>
            </>
        );
    }
}
//

export default Landing;