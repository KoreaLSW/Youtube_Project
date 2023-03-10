import './App.css';
import { Outlet } from 'react-router-dom';
import Search from './components/Search';
import Navbar from './components/Navbar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Search />
                <div className='flex mt-24'>
                    <Navbar />
                    <Outlet />
                </div>
            </QueryClientProvider>
        </>
    );
}

export default App;
