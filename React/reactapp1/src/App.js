import './App.css';       //imports css deets
//import Helloret from './components/comp1/Helloret';

//function App() {
//   let a="Sahitya Kota"
//   let b=[1,2,3,4,5]
//   let human={name:"Sahitya",age:19,sight:[1.25,1.50]}

//   return (
     // className instead of class as js already has class keyword so...    also div is must as return can only return 1 item so we'll wrap it
//     <div className="mainbod">         
//        <h1>namaskaram</h1>
//         <h3>{a}</h3>                            {/* //inside we can use js */}
//          <p>Wasssssssuuuuuuupppppppppp</p>
//         {  //b.map((i)=><h5>{i+"  "}</h5>)             //map method for returning iterations
//            b.map( (t,i) => <h5 key={i}> {t} </h5>)     //raises each child unique key warning so     second prop of map always index   state changes can be seen 
//         }
//         <h4>DETAILS</h4> 
//         <h5>Name:    {human.name}  </h5><br/>
//         <h5>Age:     {human.age}   </h5><br/>
//         <h5>Sight:   {human.sight}  </h5>

//         <Helloret data={a}/>    {/*component nesting with data from parents */}
//         <Helloret data={b}/>    {/* reusing */}
//     </div>
//   );
// }
//export default App;  



//React js 2        -------Props-State---Event-Handling---State-Change---Parent-Child-Interaction---------------------------------------------------------------------------------------------------------------------------------

//2 level nesting   reusing single comp to send data to parent
// shd check App.js, Helloret.js Second.js
//Props State

/*
import Helloret from './components/comp1/Helloret';
//Helloret itself imports Second

function App(){
  let names=["Abcd","Bcde","Cdef","Defg"]
  console.log(names)
  let ret = ['kid','boii','buckeroo']
  return(
    <div>
      <h1>Hello From the Root!</h1>
      <Helloret data={['From Helloret',ret]}/>
    </div>
   )
}
export default App;

*/



//Event Handling--State Change: Hooks
// shd check Event.js

/*
import Event from './components/comp3/Event';

function App(){
  return(
    <div>
      <h1>Event Handling Using React JS</h1>
      <Event />
    </div>
   )
}
export default App; 
*/

//React js 3        -------React-Bootstrap---Conditional-Rendering---Parent-Child-Interaction-------------------------------------------------------------------------------------------------------------------------------

/*
import logo from './logo.svg'
//extra import makes webpack load img relative to the App.js
//using dependency graph --high speed 

import {TbCarTurbine} from 'react-icons/tb'

//cond rend
import { useState } from 'react';

//parent-child
import Child from './components/comp4/Child';

function App(){
  let condition='yes'
  let [time,setGreet]=useState('yes')
  let changeGreet=()=>{ time==='yes' ? setGreet('no'):setGreet('yes')}

  //parameterised func for child to comm
  let [parentpropsdata,setParentpropsdata]=useState('WAAALT')
  let [data,setData]=useState("")

  let ucantalktome=(data)=>{
    console.log(data)
    setData(data)
  }

  return(
    <div align="center">
      <h1 align="center" className="text-success display-1">BootStrap Begins ...again</h1>
      
      <img src={logo} width="50px" />

      {//  React-icon use    }
          <TbCarTurbine /><br/>


      {// conditional rendering!! Stateless
          condition === 'yes' ? <h2 className="text-warning display-4 " style={{display: 'inline-block'}} >Thanks </h2> : <h2 style={{display: 'inline-block'}} className="text-danger display-4"> HELLO </h2>}
      

      {// conditional rendering!! StateChange}
          {time === 'yes' ? <h2 style={{display: 'inline-block'}} className="display-4 text-success" font="#ffff">Thanks </h2> : <h2 style={{display: 'inline-block'}} className="display-4" color="Black"> HELLO </h2>}      
          <button className='btn btn-info' onClick={changeGreet}>
          {time === 'yes' ? <h6 >Turn Black</h6>:<h6>Turn Green</h6>}
          </button>

      {// PARENT CHILD INTERACTION--- CHILD TO PARENT
            //parent to child is acheived via props
            //child uses a parameterised func from the parent inorder to send data to parent 
            //parent and child can also change state of each other using the set functions of their useState hooks
      }
          <Child parentdata={parentpropsdata} parentpermission={ucantalktome}/>
          <h2 >{data}</h2>

    </div>
  )
};
export default App
*/

//React js 3        -------Side-Effects--Error Handling in HTTP Requests-------------------------------------------------------------------------------------------------------------------------------

//Side Effects
/*They are the actions which are performed with interaction with outside unpredictable world
  eg. http req can lead to errors such as resource not found, took too long to load etc
   it is not under the react api control

  The Callback funcs like setTimeOut func is also unpredictable as, when we call the func with for eg 5000 the min 
  waiting time is set to 5s thus it can also take longer than 5s

    side effects are dealt by useEffect hook
      useEffect(  effect,   dependencies array)
    performs action when a component is mounted for the first time or
      when props/state change
    
*/