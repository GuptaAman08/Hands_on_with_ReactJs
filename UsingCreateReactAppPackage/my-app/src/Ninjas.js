import React from 'react';

// Using a functional or UI component instead of a container component since we are concerned with UI state
const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props
    const NinjaList = ninjas.map(ninja => {
        return(
            <div className="Ninjas" key={ninja.id}>
                <p>Name : { ninja.name }</p>
                <p>Age: { ninja.age }</p>
                <p>Belt Color : { ninja.belt }</p>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
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