const student = {
	id: 123,
	name: 'alamin',
	email: 'alamin@aiub.edu',
	getName: ()=>{
		return this.name;
	}
}


function getStudent(){
	return {
		id: 123,
		name: 'alamin',
		email: 'alamin@aiub.edu',
		getName: ()=>{
			return this.name;
		}
	}
}

module.exports = getStudent;