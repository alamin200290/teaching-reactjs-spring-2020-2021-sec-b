
export default function User({name, id, dept, email}){
	return (
		<div className='usermain'>
			<h1>Name: {name}</h1>
			<p>ID: {id}</p>
			<p>DEPT: {dept}</p>
			<p>DEPT: {email}</p>
			<button onClick={()=>alert(name)}>Click</button>
		</div>
	)
};