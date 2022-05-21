import React from 'react';
import Provider from '../Provider/Provider';
import Die from '../Die/Die';
import { useState } from 'react';
import { render } from 'react-dom';
import '../RollArea/RollArea.css'
import PlayerDash from '../PlayerDash/PlayerDash';



class RollArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: "four",
            die2: "three",
            turnScore: 0,
            namePL1: "PLAYER 1",
            namePL2: "PLAYER 2",
            totalScorePL1: 0,
            totalScorePL2: 0,
            rolling: true,
            turn: 1,
            winner: null,
            overlayPL1: null,
            overlayPL2: 'overlay',
            players: this.props.players
        }
    }


    handleRollClick() {
        
        let newDie1 = Math.ceil(Math.random() * this.sides.length);
        let newDie2 = Math.ceil(Math.random() * this.sides.length);
       
        this.setState((prev) => ({
            rolling: false,
            die1: Object.keys(this.sides[newDie1 - 1])[0],
            die2: Object.keys(this.sides[newDie2 - 1])[0],
            turnScore: prev.turnScore +
                Object.values(this.sides[newDie1 - 1])[0] +
                     Object.values(this.sides[newDie2 - 1])[0]
            }));
          

            
        if (newDie1 + newDie2 === 12) {
            this.setState((prev) => ({ ...prev, turnScore: 0 }));
            this.state.turn == 1 ? this.setState({ turn: 2 }) : this.setState({ turn: 1 });

        }
      

    };
    resetState(){
        this.setState( {
         die1: "four",
        die2: "three",
        turnScore: 0,
        totalScorePL1: 0,
        totalScorePL2: 0,
        rolling: true,
        turn: 1,
        winner: null,
        overlayPL1: null,
        overlayPL2: 'overlay',
       
    })

    }


    componentDidUpdate(){
        if(this.state.totalScorePL1>100){
             alert("Player 2 wins! Player 1 exceeded 100 points");
            this.resetState();
    }else if(this.state.totalScorePL2>100){
        alert("Player 1 wins");
        this.resetState();
    }
    if(this.state.totalScorePL1==100){
        alert("Player 1 wins!");
       this.resetState();
    } else if(this.state.totalScorePL2==100){
        alert("Player 2 wins");
        this.resetState();
    }
}

    handleHoldClick() {
        
        if (this.state.turn == 1) {
            this.setState((prev) => ({
                 totalScorePL1: this.state.totalScorePL1 + prev.turnScore,
                  turn: 2, turnScore: 0 }));
                  
        } else {
            this.setState((prev) => ({
                 totalScorePL2: this.state.totalScorePL2 + prev.turnScore,
                  turn: 1, turnScore: 0 }));


        }
        this.setState({rolling:true}, ()=>{
           
            if(this.state.players==1){
                setTimeout(()=>{
                    this.handleRollClick();
                    this.setState((prev) => ({
                        totalScorePL2: this.state.totalScorePL2 + prev.turnScore,
                         turn: 1, turnScore: 0, rolling:true }), this.toggleOverlay());
                
            }
                    ,1500)
            }
        })
        this.toggleOverlay();
       
       
    }



    toggleOverlay(){
        this.state.overlayPL1 == null ? 
        this.setState({overlayPL1: "overlay" , overlayPL2: null }) :
        this.setState({overlayPL2: "overlay" , overlayPL1: null })
    }


    handleWin(winner){
        alert(`Player ${winner} Won`);
    }

    sides = [
        { one: 1 },
        { two: 2 },
        { three: 3 },
        { four: 4 },
        { five: 5 },
        { six: 6 },
    ]

    render() {
        return (
           
            <div className='play-area' style={{display:`${this.props.display}`}}>
                <PlayerDash overlay={`${this.state.overlayPL1}`} plClass={"player1"} name={this.state.namePL1} score={this.state.totalScorePL1} />
               <div className='middle-container'>
                <div className='dice-container'>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <div className='turn-and-btns'>
                <div className='turn-score'> 
                <p>POT</p>
               <p> {this.state.turnScore}</p>
                </div>
                <div className='button-container'>
                    <button className=' rollBtn' onClick={() => { this.handleRollClick() }} >Roll</button>
                    <button className=' holdBtn' onClick={() => { this.handleHoldClick() }} disabled={this.state.rolling}>Hold</button>
                </div>
                 </div>
            </div>
                <PlayerDash overlay={`${this.state.overlayPL2}`} plClass={"player2"} name={this.state.namePL2} score={this.state.totalScorePL2} />
            </div>
          


        );
    }




}

export default RollArea;