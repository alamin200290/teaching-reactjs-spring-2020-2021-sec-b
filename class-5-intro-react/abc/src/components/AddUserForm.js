import {useState} from 'react';

import './AddUserForm.css';

const AddUserForm = ({addUser})=> {
    
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        dept: '',
        email: '',
    });

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        //console.log(attar+ "|"+value);
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
    }


    const formSubmit=(e)=>{
        e.preventDefault();

        // const id = e.target[0].value
        // const name = e.target[1].value
        // const dept = e.target[2].value
        // const email = e.target[3].value
        //const newUser = {id: id, name: name, dept: dept, email:email}
        addUser(newUser);

        setNewUser({
            id: '',
            name: '',
            dept: '',
            email: '',
        })
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={newUser.name} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" name="dept" value={newUser.dept} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" value={newUser.email} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AddUserForm;