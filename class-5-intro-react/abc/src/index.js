import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function User(){
	return (
		<div className='usermain'>
			<Name />
			<Id />
			<Dept />
		</div>
	)
};

const Name = ()=> <h1>Name: Alamin</h1>;
const Id = ()=> <p>ID: 12</p>;
const Dept = ()=> <p>DEPT: SE</p>

ReactDOM.render( <User/>, document.getElementById('root'))