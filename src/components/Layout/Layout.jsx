import React, { Suspense } from 'react'
import { Header } from "../Header/Header";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    
    return (
        <>
            <Header />
            <main>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
                </Suspense>
            </main>
        </>
    
    )
}