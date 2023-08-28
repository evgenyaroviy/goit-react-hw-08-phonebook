import React, { Suspense } from 'react'
import { Header } from "../Header/Header";
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';


export const Layout = () => {
    
    return (
        <>
            <Header />
            <main>
            <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
            </main>
        </>
    
    )
}