import React from 'react'

const Search = () => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default Search