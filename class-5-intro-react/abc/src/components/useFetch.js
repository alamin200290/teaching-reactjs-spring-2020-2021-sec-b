import {useState, useEffect} from 'react';


export const useFetch = (url)=>{

    const [status, setStatus] = useState(true);
    const [users, setUsers] = useState([]);

    const getUserlist = async ()=>{
        const response = await fetch(url, {
        	mode:'no-cors'
        });

        const data = await response.json();
        
        console.log(data);
        //setUsers(data);
        //setStatus(false);
    }

    useEffect(()=>{
    	getUserlist();
    }, []);
    

}