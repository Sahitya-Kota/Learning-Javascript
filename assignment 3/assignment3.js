let a = [43,42,56,61,34,95];

console.log("Sum of Elements in an Array: ");
let s= 0;
for(let i = 0; i < a.length; i++)
	s += a[i];
console.log();

console.log("Print Even numbers of an Array: ");
for(i = 0; i < a.length; i++){
	if(a[i] % 2 == 0)
		console.log(a[i]);
}

console.log("Prime numbers of an Array");
for(let n of a){
    let f=0
	for(i = 2; i < n; i++){
		if(n % i == 0)
			f=1
	}
	if(f == 0){
		console.log(n,"is a prime number");
	}
}

console.log("Creating Objects");
console.log("Object: Student");
let student = {
	name: "Abcdef",
	age: 20,
	branch: "ECE",
	rollno: "84371"
}
console.log(student);

console.log("Object: Bus");
let bus = new Object();
bus.tires = 8;
bus.passenger_capacity = 48;
bus.fuel_capacity = "100 litres";
console.log(bus);

console.log("Object: Employee");
let employee = new Object();
employee.firstName = "Abcd"
employee.secondName = "Efghijk"
employee.experience = 45
console.log(employee);

console.log("Object: Mobile");
let mobile = {
	name: "Panasonic",
	storage: "32 gb",
	ram: "2 gb",
	refresh_rate: "30 hz",
	battery_capacity: "1065 mAh"
}
console.log(mobile);
