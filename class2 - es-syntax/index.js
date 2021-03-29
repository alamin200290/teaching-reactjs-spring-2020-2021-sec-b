"use strict"

//let students = ['alamin', 'abir', 'arif', 'rakib', 'razib'];
//let xyz = ['xyz', 'abc'];


/*let students = [
	{id:1, name: 'alamin', dept: 'CS'},
	{id:2, name: 'xyz', dept: 'CIS'},
	{id:3, name: 'abc', dept: 'CSE'},
	{id:4, name: 'pqr', dept: 'CSE'},
	{id:5, name: 'pqr', dept: 'CSE'}
];

let id	= [34,57,354,24, 55];

const mytotal = students.reduce(function(total, std){
	total.id += std.id;
	console.log(std);
	return total;
});*/


/*const mytotal = students.reduce(function(total, std){
	return {id:total.id + std.id};
});
console.log(mytotal.id);*/

/*const newarray = students.filter(function(std){
	return std.dept == "CSE";
});*/
//const newarray = students.filter(std=>std.dept == 'CSE');
//console.log(newarray);

//let newstring = students.join('-');
//let newarray = [...students, 'pqr', ...xyz, 'aaa'];

/*let newarray = students.map((value)=>{
	return value + 'ABC';
});*/

/*let newarray = students.filter((value)=>{
	return value[1] == 'l';
});*/

/*let newarray = students.filter((value)=>{
	return value[1] == 'l';
});

console.log(newarray);
console.log(students);
*/


/*const student = {
	name: 'alamin',
	id: 12,
	dept: 'CS',

	getName: function(){
		return this.name;
	},

	getObj: function(){
		return {
			version: 1.1,
			getVersion: function(){
				return this.version;
			}
		}
	}
};

console.log(student['getObj']().getVersion());*/

/*const student = {
	name: 'alamin',
	id: 12,
	dept: "CSE"
};
*/

/*let myname = student.name;
let id = student.name;
let dept = student.name;

const {name:myname, id, dept} = student;
console.log(myname);*/
//console.log(this);

/*setTimeout(function(){
	console.log('3s call');
}, 3000);

setTimeout(function(){
	console.log('2s call');
}, 2000);

setTimeout(function(){
	console.log('1s call');
}, 1000);

console.log('0 call');
*/



//callback



//promise 
/*let p = new Promise((resolve, reject)=>{
	let sum = 2+3;
	if(sum == 5)
	{
		setTimeout(()=>{
			resolve('success');
		}, 3000);

	}else{
		reject('error');
	}
});

p.then((msg)=>{
	console.log(msg);
}).catch((error)=>{
	console.log(error);
});*/



//async+await

/*
function processmytask(sum){
	return new Promise((resolve, reject)=>{
		if(sum == 5)
		{
			setTimeout(()=>{
				resolve('success');
			}, 3000);

		}else{
			reject('error');
		}
	});
}

async function testAsyncTask(val){
	console.log('async process calling');
	try{
		const response  = await processmytask(val);
		console.log(response);
	}catch(error){
		console.log(error);
	}
}
testAsyncTask(5);*/


/*const f1 = (a, b, callback) =>{
	setTimeout(()=>{
		let sum = a+b;
		callback(sum);
	}, 3000);
}

const f2 = function(f1){
	f1(3,5, function(result){
		console.log(`Result: ${result}`);
	});
}

f2(f1);
console.log('this is another task!');*/

/*
function sum(a, b){
	return new Promise((resolve, reject)=> {
		if(a+b == 50){
			setTimeout(()=>{
				resolve('success');
			}, 3000);
		}else{
			reject('error');
		}
	});
}

sum(40,10).then(msg=>{
	console.log(msg);
}).catch(error=>{
	console.log(error);
})

//sum(40, 10).then(
//	(msg)=>{console.log(resolve)}, 
//	(error)=>{console.log(reject)}
//);

console.log('this is another task...');*/


/*function sum(a, b){
	return new Promise((resolve, reject)=> {
		if(a+b == 50){
			setTimeout(()=>{
				resolve('success');
			}, 3000);
		}else{
			reject('error');
		}
	});
}


async function getMytaskDone(){
	console.log('this is another task');
	let response = await sum(20,30);
	console.log(response);
}

getMytaskDone();
console.log('outside get task done');*/

/*const student = {
	id: 123,
	name: 'alamin',
	email: 'alamin@aiub.edu',
	getName: ()=>{
		return this.name;
	}
};*/


class Student{

	constructor(name, id, email=''){
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName(){
		return this.name;
	}
}


const s1 = new Student('alamin', '12');
console.log(s1.getName());

