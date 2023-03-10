import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch, BsFillMicFill } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSpeechRecognition } from 'react-speech-kit';

export default function Search() {
    const { keyword } = useParams();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            // 음성인식 결과가 value 상태값으로 할당됩니다.
            setSearch(result);
        },
    });

    useEffect(() => {
        setSearch(keyword || '');
    }, [keyword]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        stop();
        navigate(`/${search}`);
    };

    const handleClick = () => {
        listen();
        setTimeout(() => {
            stop();
        }, 3000);
    };

    return (
        <div className='w-screen h-24 flex p-5 border-b fixed top-0 bg-white'>
            <Link to='/' className='flex items-center cursor-pointer'>
                <BsYoutube className='mr-1 text-brand text-4xl' />
                <p className='font-bold text-3xl ml-1 sm:hidden'>YouTuBe</p>
            </Link>
            <div className='w-full flex justify-center items-center'>
                <form
                    className='w-6/12 flex justify-center sm:w-9/12'
                    onSubmit={handleSubmit}
                >
                    <input
                        className='w-full h-14 p-2 outline-none border rounded-l-full text-gray-500 text-lg sm:h-10'
                        type='text'
                        placeholder='검색해주세요..'
                        onChange={handleChange}
                        value={search}
                    />

                    <button>
                        <BsSearch className='w-16 h-14 text-3xl cursor-pointer rounded-r-full bg-gray-200 px-5 sm:w-10 sm:h-10 sm:px-3' />
                    </button>
                </form>
                <BsFillMicFill
                    className='ml-10 text-xl cursor-pointer sm:ml-3'
                    onClick={handleClick}
                />
                {listening && <p>음성인식 활성화 중...</p>}
            </div>
        </div>
    );
}
