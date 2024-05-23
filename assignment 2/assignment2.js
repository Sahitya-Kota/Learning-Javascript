let a=45,b=29,c=84

console.log("Largest of Two\n") 
if(a>b)
    console.log("Largest of a=",a,"and b=",b,"is",a) 
else if(a<b)
    console.log("Largest of a = ",a,"and b = ",b,"is ",b) 
else
    console.log("Both a = ",a,"and b = ",b," are equal") 


console.log("Largest of Three\n") 
if(a>b && a>c)
    console.log("Largest of",a,b,"and",c,"is ",a) 
else if(c>b && c>a)
    console.log("Largest of",a,b,"and",c,"is ",c)
else if(b>a && b>c)
    console.log("Largest of",a,b,"and",c,"is ",b) 
else
    console.log("Error in input") 


console.log("Factors of a Number\n")
factor()
function factor(){
console.log("The factors of",a,"are")
for(let i=a;i>0;i--){
    if(a%i == 0)    console.log(i)
}}


console.log("Prime Number Check\n")
function prime(){
let f=0
for(let i=a-1;i>2;i--){
    if(a%i == 0){
        return 1
    }
}}
if(prime()==1) console.log(a,"is not Prime")
else console.log(a,"is Prime")


console.log("Even Factors of a Number\n")
console.log("The even factors of",c,"are :")
efacs()
function efacs(){
    for(let i=c;i>0;i--){
        if (i%2==0){
            if(c%i == 0)
                console.log(i)
        }
    }
}
