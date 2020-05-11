import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  state={
    count: 0
  }

  handleClick = (event, property) =>{
    console.log('clicked handleClick');
    if(property === 'increment'){
      this.setState({
        count: this.state.count +1
      })
      this.props.dispatch({type: 'increment', payload: 1})
    }else if(property === 'decrement'){
      this.setState({
        count: this.state.count -1
      })
      this.props.dispatch({type: 'decrement', payload: 1})
    }
    
  }
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={(event)=>this.handleClick(event, 'increment')}>Increase Speed</button>
        <p>SPEED: {this.state.count}</p>
        <button onClick={(event)=>this.handleClick(event, 'decrement')}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;