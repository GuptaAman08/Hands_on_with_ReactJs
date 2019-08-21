import React, { Component } from 'react';

// Props are short name for properties, which allows us to pass data from parent component to child component
class Ninjas extends Component{
    render(){
        // Similar to unpacking in python
        const { name, age, prof } = this.props
        return(
            <div className="Ninjas">
                <p>Name : {name}</p>
                <p>Age: { age }</p>
                <p>Profression : { prof }</p>
            </div>
        )
    }
}
export default Ninjas