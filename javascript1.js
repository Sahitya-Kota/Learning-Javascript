 //CLASS 1  -------------------------------Console--Datatypes------------------------------------------------------------------------------------------------------------------------------------------


console.log("Hello World")//single or double no diff //no semi colon req

var c;//not recommended

let a;//default not garbage, it is undefined, both type and variable val
console.log("\n",a,typeof a)

const b=45;//cannot be changed by anyone in future
console.log("\n",b)
//b=345;//Uncaught TypeError: Assignment to constant variable.

a=345;//assignment
console.log(a,typeof a,b,typeof b)// , joins data

let y='hello'
console.log(y)

/*  primitive data types: dynamic typing

    number      string   bigint    boolean
    undefined   null     symbol


*   non-primitive: object
*   arith ops-- logical ops-- comparitive ops-- assignment ops
*   garbage collector available
*   a=== or !==b check datatype and value

*/


//CLASS 2  -------------------------------Loops--Functions-----------------------------------------------------------------------------------------------------------------------------------------------

//semicolons?? : https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/


//if, else, else if
let c=false
if(c){
    console.log("if exec")
    alert("it was false")
}
else if(c==false)
    console.log("else exec")

//loops
for(let i=1;i<=5;i++){
    console.log(i);
}

//functions
function hello(a){
    return a+" hello"
}
console.log(hello(7))

//anon func
let prof=function(a){
    return a+" anon"
}
console.log(prof(97))

//arrow func similar to lambda in python
let hi =(a,b) => a+b+" arrow"
console.log(hi("str ",4))



//CLASS 3  -------------------------------Arrays--Objects------------------------------------------------------------------------------------------------------------------------------------------------------


//creating array ie packing data
let aa=[213,43,43,44,42.4,"thirty "]         //ordered collection(indexes)
console.log(aa+"\t"+aa[2]+" "+aa[-1])          //no negative fetching
console.log(aa.length)                       //length of array

//for of loop
for(let i of aa)
    console.log(i)

//objects: packing real world properties
let human={                                 //not name  reference
    name:"abcdefijgd",                      //key:val pairs
    age:456,                                //its unordered
    sex:"F"                                 //simple obj not complex
};
console.log(human)
console.log(human.name)

//for in loop-- iterates objects
for(let i in human)
    console.log(i+" : "+human[i])



//CLASS 4  --------------------------------Storage---ComplexObjects---ArrayOperations-------------------------------------------------------------------------------------------------------------------------
//During prog exec data stored in RAM
//primitives(size of obj known during execution)=static data---stored in stack
//non prims  objs  stored in heap
//references in stack  calls heap for data


//complex objs
human={
    name:"abcdefijgd",
    age:456,
    sex:"F",
    address:{
        no:34,
        street:"mg mmgmr",
        pin:500053
    },
    skill:["eat","sleep","daydream"],
    sal:{
        basic:3213,
        pf:2332,
        da:323,
    },
    total:function(){
        let s=0
        for(let i in this.sal)
            s+=this.sal[i]
        console.log("Salary: ",s)
    }
};
human.total()

//ins del updt array
let r=[43,89,90,65,55];console.log(r)
let l=r.unshift(12,22);console.log(r,l)         //unshift adds items a begining  returns length
r.push(45,22);console.log(r)                    //push appends items
t=r.splice(4,0,33,66);console.log(r,t)          //splice(index of insert,no of eles to remove,val)
t=r.splice(0,3,"44");console.log(r,t)           //splice(index of insert,no of eles to remove,val) aft rem giv insert vals as arr
r.shift();console.log(r)                        //del and ret from begining
l=r.pop();console.log(r)                        //del and ret at end

//working on objects
let book={
    name: "Hello",
    code: 231332,
    section:"Knowledge"
};  console.log(book)

book.pgcnt=450;console.log(book)             //inserting update new props/vals to object edits if exists
delete book.section;console.log(book)        //del obj prps

//array of objs
let objar=[{id:45,name:"aaa"},
           {id:56,name:"bbb"},
           {id:67,name:"ccc"}];
console.log(objar)



//CLASS 5  --------------------------------Prototype--Constr--Methods--Class----------------------------------------------------------------------------------------------------------------------------


//prototype
let dude={
    interests: ["football","guitar","baking"],
    friends: 56,
    stat: "dating",
    age: 33
};
console.log(dude)
let socprofile={
    //dude
    friends: 32,                    //shadowing ie diff vals in diff senarios
    accFollows: 293,
    accFollowers: 432,
    liked: 2344,
    content: [45,344,2]
};console.log(socprofile)

//dude must be a prototype of socprofile
socprofile.__proto__=dude;                         //socprof inherits from dude
console.log(dude)
console.log(socprofile,socprofile.stat,socprofile.friends)
console.log(socprofile.__proto__.friends)
//an obj can only have one prototype ie even if it is declared later the val is updated but not new


//constructor function
function Animal(aname,species,code,age){
    this.aname=aname,
    this.species=[species],
    this.code=code,
    this.age=age,
    this.print=function(){                    //constructor method
        console.log("method started");
    }
};
//object using construcutor
let lion=new Animal("Simba",["mammalia","Felidae","Panthera","Felis Leo"],2342,16.7)
console.log(lion)
lion.print()                                  //calling a constr method

//add method to prototype of constructor
Animal.prototype.getGenus = function(){       //not added to every obj/instance
    t=this.species
    console.log(t)                           
};
lion.getGenus();

//instance and static variables
//here lion is obj and an instance of Animal
//instance variables: vars that are part of an obj like aname, also known as properties
//instance method: method that can access instance properties here getGenus


//static methods: donot work with instance props
Animal.statictrial=function(){
    console.log("WE ARE ANIMALS")
};
Animal.staticTrial();                   //static method call doesnt need(cannot be used) obj for calling directly use constr


//object-datatype       Object-root object!!

function Person(person,age){//person constr
    this.person=person
    this.age=age
}
function Student(name,age,id,sdate) {
    Person.call(this, name, age)            //pushes vals from here to the prototype
    this.id=id
    this.sdate=new Date(sdate)
}
Student.prototype= Object.create(Person.prototype)          //prototype of student is set to person

let sen=new Student("Hasa",18,34,"12/3/2022");console.log(sen)
//on the whole this creates a protypal chain ie.  student is a prototype of person and person's prototype is Object




//CLASS 6  --------------------------------ECMA---Class---Errorhandl---Conditionals-------------------------------------------------------------------------------------------------------------

//ECMA Script-standards         ES6 most imp        ES12 latest


//Class--includes both constructors and properties and objects
class Employee{                                            //no braces cus not func

    constructor(ename,id,age,sal){                          //constructor
            this.name=ename                                 //object initialisation
            this.id=id
            this.age=age
            this.sal=sal
    }
    print(){                                               //class method   directly added to prototype    no need to prototype
        console.log(this)
    }
}
let s=new Employee("yesrl",736,92,120000)
s.print()

//Prototypal chains with classes

class Citizen extends Employee{                            //here citizen deps on emp data
    constructor(ename,age,sal,vid,address,father){
            super(ename,age,sal);
            this.father=father                             //this.name=name--not req can use from parent
            this.vid=vid
            this.address=address
    }
}
let ss=new Citizen("trhjyu",67,9876878,234423,"kfnlknrflkef","Nkwnf");
ss.print()

//Error Handling
//reference:not found in mem        //syntax:not in syntax
//js is inline  once error occurs exec stops

//Try Catch
console.log("test1")
try{
    console.log(a+" test2 ")
}
catch(errorObj){
    //console.log("test2 Error!")
    console.error("test2 failed")
    //handles ie even if error occurs the rest of code will be executed w/o termination
}
console.log("test3")

//Conditional / ternary op      instead of if else
let aaa=9,bbb=6,ccc=9
let greater = aaa>bbb ? true : false
console.log(greater)
let greater2 = aaa==ccc ? "equal": aaa>ccc ? true : false
console.log(greater2)

//Debugging     break points




//CLASS 7  --------------------------------ArrayOps---VarScope---MutableImm---------------------------------------------------------------------------------------------------------------------


//ternary op cont.
let w=3,x=4
let g= w>x ? "yes" : "no";  console.log(g)

x=5,y=6
let msg;
x>y ? msg=1 : msg=0                                                             //assignment op only
x>y ? (msg=1,console.log("x is good")) : (msg=0,console.log("y is good"))       //multiple expressions at once can also be func call    imp



//Array functions: filter   map     forEach     reduce      find      findindex
//all use call back fuctions        call on obj ie array
//these methods  call callback functions

//filter method--   filters data acc to req
r=[77,66,22,33,44,55]
let h= r.filter(function(ele){
    return ele>44;
  });
let hh=r.filter((ele) => ele>44);       //cannot modify eles only selection
console.log(h,hh)                       //also on array of objects

//map       modifies elements of array and returns to new arr
let hhh=r.map((ele) => ele  +44);       //if toggled w/ filter it doesnt change
console.log(hhh)

//forEach
//for(let i of r) console.log(i)                         //for of no clue of index
//for(let i=0;i<length(r);i++) console.log(i,a[i])       //basic for
r.forEach((ele,i)=>console.log(ele,i))                 //forEach method

//reduce- array to single val
let sum=r.reduce((accumulator,ele)=>accumulator + ele)  //accumulator stores prev values
console.log(sum)

//find finds elements
t=r.find((ele)=>ele==33);console.log(t)
t=r.findIndex((ele)=>ele==77);console.log(t)


let ff = (x,y) => x**y
function func(a){console.log(a)}            //we can send primitives , non prinmitives(objects) and also functions
func(ff)                                    //func(1 or 'w' or true or {name:"hello"} or [4,5,6] or func)
// here ff acts as a call back function as it is being called by another function
//call back not immediate execution but only when we call

//Variable Scopes:  global scope   function scope    block scope
////global accessible everywhere; lifetime:until exec is finished
////function scope only in func else referece error; life: only as func is exec
////block: eg if/else block accessible only in block; very low life time





//CLASS 8  --------------------------------Mutables---TemplateLit---Copy---Destruct---Rest---Strings-------------------------------------------------------------------------------------------------------


//Mutablilty
// primitives are immutable ie if

x=4;console.log(x); x+10;console.log(x)                         //no change  only new mem created
y=4;console.log(y); y+=10;console.log(y)                        //changes
hi={one:"hey",two:"hello"};hi.three="hola"; console.log(hi)     //objects are mutable(non prims)

//Template Literals
//we usually use console log for checking backend but its too much so we use back tick ops
console.log(`print ${x} times pls`)      //one ${} only returns 1 output

//Copy of prims and objs
let cx=x;console.log(`${cx} is a copy of ${x} `);x=44;console.log(`after ${cx} is a copy of ${x} `)
let cpyhi=hi;console.log(cpyhi," is a copy of ",hi);hi.two="hej";console.log(cpyhi," is a copy of ",hi)
//we can see that changing obj changes its cpy as well this is due to both cpyhi and hi pointing to the same memory locations of these properties
//they are references and copy of references has been made not obj itself
//so we use root  constructor static method assign

let cchi=Object.assign({},hi);          //object assign copy
console.log(cchi," is a copy of ",hi)
hi.two="hej";                           console.log(cchi," is a copy of ",hi)

let ccchi={...hi}                       //spread operator
hi.two="hej";                           console.log(ccchi," is a copy of ",hi)

t=[11,22,33,44,55];   tcc=[...t]        //array copy
t.push(66);           console.log(t,tcc)

//Destructuring:  es6
let ar=[11,22,33,44,55]
let [i,j,k]=ar;   console.log(i,j,k)                        //destructuring ie unpacking this arr
let [m,,n]=ar;    console.log(m,n)                          //unpacking while skipping

human={call:"Defcit",age:45,id:"hwj872jwugf802332"}
let{call,age,id}=human;      console.log(call,age,id)        //destructring obj   req prop names mandatorily


//Rest Parameters: es6
function u(){console.log("hey")};   u();u(5,"rtrt")                 //parameterless useless parameters are just ignored
function e(r){console.log("hey",r)};   e("Bitch");e()               //parameters as req   even if parameters arnt matched its exec
function sum(a,b){console.log(a+b)};    sum()                       //not an error gives NaN output
function print(...a){                                               //here ...a is the rest parameter  it doesnt end
    let s= a.reduce((acc,ele)=>acc+ele)
    console.log(s)
};  print(1,2,3,4,5)

//Strings
// length   slice   substring   replace  replaceAll   toUpperCase   toLowerCase   concat   charAt   split
str="Hello World! Programmed to work and not to ~feel~"
console.log(
    str.length, str.slice(-6,), str.substring(4,23), str.replace(" ","  "),
    str.replaceAll("~",'~~'), str.charAt(14), str.split(" ")
)




//CLASS 9  --------------------------------Hoisting---Closures---FuncObj---Modules---AsyncJs----------------------------------------------------------------------------------------------------


//Hoisting
//console.log(a)             //if only this a is not defined at ...
console.log(z);//let z=75   //else ReferenceError: Cannot access 'a' before initialization
var z=45;                   //returns undefined

//c compilation code to binary then execution
// js: compilation identifies declaration of vars,funcs,objs etc then allocates space and default value
////       execution takes place line by line thus here prog knows z exists but its value has not been ini by executer
//here var enables declaration bef usage
//hoisting: all declarations moved up
//Temporal dead zone: starts in its enclosing scope and ends when declared

//func decl are hoisted not func expressions thus func exp is safe
test();
function test(){console.log("Heyyyy")}
test1();                    //ReferenceError: Cannot access 'test1' before initialization
let test1=function(){console.log("Heyyyy")}


//
//in js func can also be used as objects:  supports functional programming along with oop
//funcs can also work as arguments to other functions:  callback funcs
//funcs can also return other funcs
//func has special props same as objs    return,assign,call,args func   thus funcs r FIRST CLASS OBJECTS

x=function(){console.log("hi im",typeof(x));return 25}          //func as arg
function y(t){
    console.log("hi im",typeof(x),t)
    return t
    //return t()                                                   //returning a func
}
console.log(y(x))               //here y() accepts anoth func as arg and ret(not mandatory) func thus its a HIGHER ORDER FUNC so are all callback funcs


//Closures
//its a func w/ its surr state      by default all funcs have closures
//usly data decl in a func has its scope w/in it thus its value cannot be accesed else where
//but due to closure in inner funcs this data will be accessible even after func exec

function test(){
    let x=50;                               //x decl here
    return function(){x=x*x;return x}       //x accessible here as its an inner func
}
console.log(test())                 //func call exec enables access to x
let inner=test();                   //return val assigned to var inner but nrmly x val isnt avlbl as x def is in higher ord func
console.log(inner,inner())          //but it is acsd as anon func decl in test stores its surr state vals ie its higher outer func data and this data is given to inner making it acssbl


//Modules
//used to spread parts of code across diff files rather than having everything at one place
//go to module1.js

import x from "./module1.js" ;      //importing fridge as x
//let f=fridge
onsole.log(x.model)               //SyntaxError: Cannot use import statement outside a module
//the above error occurs as our js files are not labeled as modules thus the html cannot recognise export and import
//when we add the module file w/o mentioning its type ~Unexpected token 'export' (at module1.js:8:1)
x.life=45;console.log(x,x.life)

import { hey,array }  from "./module1.js";     //can be called by its name in modu only
hey();console.log(array)

//Asynchronous JS
//js is synchronous by default: uses single threading(1 main thread): one job at once
console.log("one")
 //for (let i=0; i<100000000000; i++){}
console.log("two")
console.log("three")
//async can be enabled by WebAPIs




//CLASS 10  -------------------------------AsyncJs---WebAPI---Timer---Callbacks---Promises------------------------------------------------------------------------------------------------------


//Asynchronous
setTimeout(()=>{console.log("T=5000")},5000)
console.log("one");console.log("two")                   //first this block is executed as it takes lesser time

setTimeout(()=>{console.log("T=1000")},1000)
setTimeout(()=>{console.log("T=800")},800)
setTimeout(()=>{console.log("T=580")},580)


//Promises: async
//each promise has a pending state until fufilment or rejection
//involves creation and consumption
let cond=false
console.log("promises")
let prmsObj = new Promise(
    (fulfilled,rejected)=>{                             //arrow callback func
        //if(cond==true){     fulfilled("Dependable")}
        if (cond==true){setTimeout(()=>fulfilled("Dependable"),300)}    // w/ delay we can see that bef cond is known it is listed as pending
        else    {   rejected("Untrustworthy")}
})
//console.log(prmsObj)
prmsObj
.then((msg)=>console.log(msg))             //takes fulfilled value
.catch((err)=>console.error(err))          //takes rejected val
console.log("are async")

//Chained Promises
let rank=1;
let prize=true;

let stdPrm= new Promise(
    (first,notfirst)=>{
        if(rank==1){
            setTimeout(()=>first("yeah, I get a prize"),1000)
        }
        else {
            setTimeout(()=>notfirst("oh no i lost"),1000)
        }
    }
)
let prtPrm= new Promise(
    (prize,noprize)=>{
        if(prize==true){
            setTimeout(()=>prize("yeah take this prize"),2000)
        }
        else {
            setTimeout(()=>noprize("you're a dissapointment"),2000)
        }
    }
)
stdPrm
.then((f)=>{console.log(f);return prtPrm})      //return initiates consequent promises
.then((msg)=>console.log(msg))
.catch((ng)=>console.error(ng))                 //all rejected states will be handled


//APIs: Application Program Interface
//est communication btn diff aplications like dbs, apps etc
//diff apps use diff lang: for these to work with each other we use JSON ie a technology independent/neutral data format so is xml but its slower



//CLASS 11  -------------------------------JSON---HttpReq---DOM---DomManipulations--------------------------------------------------------------------------------------------------------------


//JSON  data can be parsed by all langs
[{
    "name":"sahitya",
    "id":62
},
{
    "name":"sahityaa",
    "id":622
}]

//WEB TECH FOR DEVS https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

//HTTP Request
//used to contact servers by client side apps also to store client data
//CRUD: Create resources(POST)  Read res(GET)   Update res(PUT)   Delete res(DELETE)
//http: stateless doesnt remember previous requests or responses
//more requests https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

//making http requests using fake APIs
fetch("https://jsonplaceholder.typicode.com/users")         //link to JSON data     fetch returns a promisee
.then(response=>response.json())       //response in form of streams
.then(data=>console.log("our users:\n",data))
.catch(err=>console.error(err))
//the above shit is async


//DOM and DOM Manipulation
//Document Object Model *Display       tree struct of html
//css and js get their info from DOM
//js access to eles from DOM using document
let h1ele=document.querySelector("h1")
console.log("Hello Mother",h1ele,h1ele.textContent)
h1ele.textContent="YEAHH"      //changes h1 element in browser

//event listeners
 let button=document.querySelector("button")
button.addEventListener('click',()=>{
    h1ele.textContent="hello"
})

let bg=document.querySelector("body")

//Dynamic Styles Using JS
button.addEventListener('click',()=>{           //event listener to check click
    h1ele.textContent="hello"
    bg.style.backgroundColor = "black"          //chaning properties of the file dynamically
    bg.style.color = "white"
    //let para=document.createElement("p")
    //para.textContent= "you got got"
    //bg.appendChild(para);                      //appends props to bg ie body of DOM
    let butn=document.createElement("button")
    butn.textContent= "you got got"
    butn.style.backgroundColor = "white"
    bg.appendChild(butn);
})

let ul=document.createElement("ul")
bg.appendChild(ul)

let sss=[1,2,3]
for(let i of sss){
    let list=document.createElement("li")
    list.textContent=i
    ul.appendChild(list)
}

//user input
let nm=document.querySelector("#username")      //id #
let subm=document.querySelector(".subm")        //class .
subm.addEventListener('click',()=>{
    let username=nm.value;
    console.log(username)                       //prints username obtained
    let h2=document.createElement("h2")         //h2 ele to print obt username
    h2.textContent=username
    h2.style.color="cyan"
    bg.appendChild(h2)
})

//even or odd check from user input
let bod=document.querySelector("body");
let h2=document.createElement("h2");
let input=document.querySelector("#input");
subm=document.querySelector(".subm");
subm.addEventListener('click',()=>{
   if (input.value%2==0)
        h2.textContent="Even"
    else
            h2.textContent="Odd"
    bod.appendChild(h2)
})

//nrmly input's considered as string so a.value=45+b.val=45 we get 4545
//to avoid above use let a=(+input.value)




// goto ./react.js