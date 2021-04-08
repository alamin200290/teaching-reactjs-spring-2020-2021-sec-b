import ReactDOM from 'react-dom';
import './index.css';
import {users} from './users'
import User from './components/User'

function UserList(){
	return (
		<div>
		{
			users.map((user, index)=>{
				return <User key={index} {...user} />;
			})
		}
		</div>
	);
}



ReactDOM.render( <UserList/>, document.getElementById('root'))