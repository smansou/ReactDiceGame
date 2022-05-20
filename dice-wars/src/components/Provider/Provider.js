import React, { Component } from 'react';
import PlayerDash from '../PlayerDash/PlayerDash';

class Provider extends Component {
    constructor(props){
        super(props);
        this.state= {
            totalPL1: this.props.scorePL1,
            totalPL2: this.props.scorePL2
        }
    }

  
  
    render() {
        return (
            <>
    <PlayerDash name={'player1'} score = {this.state.totalPL1} />
    <PlayerDash name={'player2'} score = {this.state.totalPL2} />
            </>
        );
    }
}

export default Provider;