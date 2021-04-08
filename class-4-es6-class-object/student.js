/*export default {
	id: 123,
	name: 'alamin',
	email: 'alamin@aiub.edu',
	getName: ()=>{
		return this.name;
	}
}*/


/*export function getStudent(){
	return {
		id: 123,
		name: 'alamin',
		email: 'alamin@aiub.edu',
		getName: ()=>{
			return this.name;
		}
	}
}

export const yourID = "12345";*/

//module.exports = getStudent;


export default class Student {

	constructor(id, name){
		this.name = name;
		this.id = id;
	}

	getName(){
		return this.name;
	}

	setName(name){
		this.name = name;
	}
	
	printFullInfo(){
		return `your details info: name- ${this.name} & id- ${this.id}`;
	}
}