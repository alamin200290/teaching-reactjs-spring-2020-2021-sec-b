import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './usersData';
import Navbar from './components/Navbar';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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

	//edit user
	const getUserlist = ()=>{
		return list;
	}

	return (
	
		<Router>	
				<Navbar/> 
			<Switch>
			
				<Route exact path='/'>
					<h1>Welcome Home!</h1>
				</Route>

				<Route path='/add'>
					<AddUserFrom status='add' callback={addUser}/> 
				</Route>

				<Route path='/userlist'>
					<>
						{
							list.map((user, index)=>{
								return <User key={index} {...user} deleteUser={deleteUser} />;
							})
						}
					</>
				</Route>
				<Route path='/edit/:id' children={<AddUserFrom status='edit' callback={getUserlist} />}></Route>
				<Route path='*'> <h1>404 not found</h1></Route>
			</Switch>
			
		</Router>
	);
}

ReactDOM.render( <UserList/>, document.getElementById('root'))