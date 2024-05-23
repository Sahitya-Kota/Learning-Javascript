import { useState } from 'react';

function Event(){
    let test=()=>{console.log("Stop Clicking Pls, its scary!")}

    //let c=0//state of c
    //let counter=()=>{c++;console.log(c)}//func changes the state of c directly
    
    //Using useState Hook 
    let [count,setCount] = useState(0)  //set.. is naming convention
    let counter=()=>{setCount(count+1);console.log(count+1)}
    
    let person={name:'Abcdef',id:2342,blood:'B!'}
    let [info,setInfo] = useState(person)
    let changeInfo = ()=>{setInfo({...person,/*name:'Zyxw',*/id:3454,blood:'Z*'})} 

    return(
        <div>
            <h2>Event Listener</h2>
            <button onClick={test}>Click Click</button>
            <button onClick={counter}>Count</button>
            <h1>{count}</h1>

            {/* here count is not changing ,comp is not rerendering 
                when state changes directly the comp is not loaded w/ latest val
                this rerendering is achieved using HOOKS
            */}
            <br/><br/><br/><br/>
            <h2>Name: {info.name}</h2>
            <h2>Id: {info.id}</h2>
            <h2>Blood: {info.blood}</h2>
            <button onClick={changeInfo}>Change</button>

        </div>
    )
}
export default Event