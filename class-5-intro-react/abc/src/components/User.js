

export default function User({name, id, dept, email, deleteUser}){
	return (
		<div className='usermain'>
			<h3>Name: {name}</h3>
			<p>
				ID: {id} <br/>
				DEPT: {dept} <br/>
				Email: {email} <br/>
			</p>			
			<button onClick={()=>deleteUser(id)}>Delete</button>
		</div>
	)
};