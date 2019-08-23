import React from 'react';

// Using a functional or UI component instead of a container component since we are concerned with UI state
const Ninjas = (props) => {
    const { ninjas } = props
    const NinjaList = ninjas.map(ninja => {
        return(
            <div className="Ninjas" key={ninja.id}>
                <p>Name : { ninja.name }</p>
                <p>Age: { ninja.age }</p>
                <p>Profression : { ninja.prof }</p>
            </div>    
        )
    })
    return(
        <div className="NinjaList">
            { NinjaList }
        </div>
    )
    
}
export default Ninjas