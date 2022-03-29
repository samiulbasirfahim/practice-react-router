import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(data => setUsers(data))
    } ,[])
    console.log(users);
    return (
        <div>
            <div className='flex justify-center'>
            {
                users.map(user=> <Link className='bg-green-700 mx-5 px-5 py-2 border-2 rounded-lg font-semibold text-white hover:text-red-900' key={user.id} to={`/users/${user.id}`}>See details {user.id}</Link>)
            }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Users;