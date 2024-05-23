import { useState } from "react"
function Child(props){

    let [childdata,setChilddata]=useState('Dad')

    return(
        <div>
        <h1>Hello {props.parentdata}</h1>
        <button className="btn btn-danger" onClick={()=>props.parentpermission(childdata)} >talk to dad</button>
        </div>
    )
}
export default Child