import React, { Component } from 'react';

// Props are short name for properties, which allows us to pass data from parent component to child component
const Ninjas = (props) => {
    // const { ninjas } = props
    // const NinjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20){
    //         return(
    //             <div className="Ninjas">
    //                 <p>Name : { ninja.name }</p>
    //                 <p>Age: { ninja.age }</p>
    //                 <p>Profression : { ninja.prof }</p>
    //             </div>    
    //         )
    //     }
    //     else{
    //         return null
    //     }
        
    // })

    const { ninjas } = props
    const NinjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="Ninjas">
                <p>Name : { ninja.name }</p>
                <p>Age: { ninja.age }</p>
                <p>Profression : { ninja.prof }</p>
            </div>    
            
        ) : null
    })
    return(
        <div className="NinjaList">
            { NinjaList }
        </div>
    )
    
}
export default Ninjas