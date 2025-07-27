import React from 'react'
import Search from '../Search'

const NavBar = () => {
    return (
        <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <Search />
            <div>
                <button className='bg-red-500 p-2 rounded'>login</button>
                <button className='bg-green-500 p-2 rounded ml-2'>Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar