import React from "react";

function Pizza({details}) {
    if (!details) {
        return <h3>Working on Your Pizza</h3>
    }
    return (

        <div className='container'>
            <h2>Name: {details.name}</h2>
            <p>Size: {details.size ? 'Small' : 'Large'}</p>
            {
                !!details.toppings && !!details.toppings.length &&
            <div>    
            Toppings:
            <ul>
               {
                   details.toppings.map((like, idx) => <li key={idx}>{like}</li>)
               } 
            </ul>
            </div>
                }
            <div>
             <p>Special Instructions: {details.instructions}</p>
            </div>
        </div>
            
    )
}
export default Pizza