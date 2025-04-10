"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle()
{
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState( false );

    useEffect( () =>
    {
        setMounted( true );
    }, [] );

    const toogleTheme = () =>
    {
        setTheme( theme === 'dark' ? 'light' : 'dark' );
    }

    return (
        <button onClick={toogleTheme} className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300">
            {mounted && ( theme === 'dark' ? '🌙' : '☀️' )}
        </button>

    )
}