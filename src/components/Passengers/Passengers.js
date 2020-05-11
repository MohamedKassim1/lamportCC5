import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state={
    name: []
  }
  handChange = (event) =>{
    console.log(event.target.value);
    this.setState({
    
      name: event.target.value
    })
  }
  handleSubmit = () => {
    
    this.setState({
      name: [...this.state.name]
    })
    this.props.dispatch({
      type: 'addName',
      
    })
  }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.handChange} />
        <button onClick={this.handleSubmit}>Add Passenger</button>

        <ul>PASSENGER LIST: {this.state.name}</ul>
      
      </div>
    )
  }
}

export default Passengers;