import React, { useState } from 'react';
import NavbarList from './NavbarList';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineXMark } from 'react-icons/hi';

export default function Navbar() {
    const navigate = useNavigate();
    const [category, setCategory] = useState([
        {
            name: 'Home',
            code: '0',
        },
        {
            name: 'Film & Animation',
            code: '1',
        },
        {
            name: 'Autos & Vehicles',
            code: '2',
        },
        {
            name: 'Music',
            code: '10',
        },
        {
            name: 'Pets & Animals',
            code: '15',
        },
        {
            name: 'Sports',
            code: '17',
        },
        {
            name: 'Gaming',
            code: '20',
        },
        {
            name: 'People & Blogs',
            code: '22',
        },
        {
            name: 'Comedy',
            code: '23',
        },
        {
            name: 'Entertainment',
            code: '24',
        },
        {
            name: 'News & Politics',
            code: '25',
        },
        {
            name: 'Howto & Style',
            code: '26',
        },
        {
            name: 'Science & Technology',
            code: '28',
        },
    ]);
    const [style, setStyle] = useState('sm:-left-52');
    const [boolean, setBoolean] = useState(false);

    const handleClick = () => {
        console.log('click', style);
        if (boolean) {
            setStyle('sm:-left-52');
        } else {
            setStyle('sm:left-0');
        }
        setBoolean(!boolean);
    };

    return (
        <div
            className={`h-screen  fixed overflow-auto scrollbar-hide flex duration-300 ${style}`}
        >
            <ul
                className={`w-52 h-full bg-gray-700  flex flex-col items-center animation `}
            >
                {category &&
                    category.map((value) => (
                        <li
                            className='w-full cursor-pointer'
                            key={value.code}
                            onClick={() => {
                                navigate(`/category/${value.code}`);
                                if (boolean) {
                                    setStyle('sm:-left-52');
                                } else {
                                    setStyle('sm:left-0');
                                }
                                setBoolean(!boolean);
                            }}
                        >
                            <NavbarList name={value.name} />
                        </li>
                    ))}
            </ul>
            <div onClick={handleClick}>
                <AiOutlineMenu className='text-3xl hidden sm:block' />
            </div>
        </div>
    );
}
