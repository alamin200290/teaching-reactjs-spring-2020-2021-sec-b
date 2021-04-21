import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <Link to='/'>Home</Link> |  
            <Link to='/add'>Create user</Link> | 
            <Link to='/userlist'>User list</Link>
        </div>
    );  
}
export default Navbar;