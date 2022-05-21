import React, { Component } from 'react';
import RollArea from '../RollArea/RollArea';
import '../PlayerDash/PlayerDash.css'

class PlayerDash extends Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <div className={`player-info ${this.props.overlay} ${this.props.plClass}`}>
                <div className='player-name'>{this.props.name}</div>
                <div className='player-score'>
                    <p>Score</p> 
                   <p className='score-num'> {this.props.score}</p>
                    </div>
            </div>
        );
    }
}

export default PlayerDash;