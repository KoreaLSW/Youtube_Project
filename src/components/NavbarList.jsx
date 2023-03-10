import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavbarList({ name }) {
    return (
        <div className='w-full flex flex-col items-center border-gray-900  py-5 border-b'>
            <p className='text-lg text-gray-300'>{name}</p>
        </div>
    );
}
