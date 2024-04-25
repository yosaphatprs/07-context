'use client'

import { ThemeContext } from "@/utilities/context/mycontext";
import { themes } from "@/utilities/themes/mythemes"
import { useContext, useState } from "react";
import Navbar from "./navbar";

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    const storedData = localStorage.getItem('themeUsed');
    const [theme, setTheme] = useState(storedData === 'dark' ? themes.dark : themes.light);

    const toggleTheme = () => {
        localStorage.setItem('themeUsed', theme === themes.dark ? 'light' : 'dark');
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                }}
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    )
} 