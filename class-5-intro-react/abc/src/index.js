import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './usersData';
import Navbar from './components/Navbar';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';
import {useFetch} from './components/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//const url = "https://jsonplaceholder.typicode.com/todos";
const url = "http://localhost/webtech/h/ajax/abc.php";

function UserList(){
	
	const users = useFetch(url);
	//const [name, setName] = useState('XYZ');
	const [list, setUsers] = useState(users);

	console.log(users);

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
						
					</>
				</Route>
				<Route path='/edit/:id' children={<AddUserFrom status='edit' callback={getUserlist} />}></Route>
				<Route path='*'> <h1>404 not found</h1></Route>
			</Switch>
			
		</Router>
	);
}

ReactDOM.render( <UserList/>, document.getElementById('root'))