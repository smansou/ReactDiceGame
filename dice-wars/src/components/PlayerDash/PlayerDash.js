import React, { Component } from 'react';
import RollArea from '../RollArea/RollArea';
import '../PlayerDash/PlayerDash.css'

class PlayerDash extends Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <div className={`player-info ${this.props.plClass}`}>
                <div className='player-name'>{this.props.name}</div>
                <div className='player-score'>Score {this.props.score}</div>
            </div>
        );
    }
}

export default PlayerDash;