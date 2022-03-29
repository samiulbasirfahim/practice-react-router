import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center bg-orange-400 rounded-lg mb-5'>
                    <Link className='mx-10 bg-orange-300 px-5 py-2 border-2 duration-200 ease-linear rounded-lg hover:bg-orange-500 border-green-600' to="/">Home</Link>
                    <Link className='mx-10 bg-orange-300 px-5 py-2 border-2 duration-200 ease-linear rounded-lg hover:bg-orange-500 border-green-600' to="/about">About</Link>
                    <Link  className='mx-10 bg-orange-300 px-5 py-2 border-2 duration-200 ease-linear rounded-lg hover:bg-orange-500 border-green-600'to="/users">Users</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;