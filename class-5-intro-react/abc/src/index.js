import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './usersData';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';

function UserList(){

	//const [name, setName] = useState('XYZ');
	const [list, setUsers] = useState(users);

	//add user 
	const addUser= (newUser)=>{
		setUsers([...list, newUser]);
	}

	//delete user
	const deleteUser= (id)=>{
		setUsers(list.filter((user)=>user.id !=id));
	}

	return (
		<table>
			<thead></thead>
			<tbody>
				<tr>
					<td> <AddUserFrom addUser={addUser}/> </td>
					<td>
						{
							list.map((user, index)=>{
								return <User key={index} {...user} deleteUser={deleteUser} />;
							})
						}
					</td>
				</tr>
			</tbody>
		</table>
	);
}

ReactDOM.render( <UserList/>, document.getElementById('root'))