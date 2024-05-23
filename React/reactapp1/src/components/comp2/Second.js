function Second(props){
    console.log(props.data)
    //method 1      receives 2 lists of names and img srcs
    //let s=props.data.names
    //let i=props.data.imgs

    //meth 2        receives list of objs each obj w/ name and corresponding img

    //meth 3        directly recieves mapped single obj once f
    return (
        <div>
        
        {/*  
            Meth 1
         {s.map((ele,key)=><h2 key={key}>Privet From Second {ele}</h2>)}
         {i.map((ele,key)=><img  src={ele} width="100" />)} */}

        {/*
            Meth 2 
         {props.data.map((ele,key)=><div key={key}><h2>Privet From Second {ele.name}</h2><img  src={ele.img} width="100" /></div>)} 
        */}   

        <img src={props.data.img} width='200' alt='hello'/>
        <h2>Hello From Da {props.data.name}</h2>    
        </div>
    );
}
export default Second 