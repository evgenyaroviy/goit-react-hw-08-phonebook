import React, { Suspense } from 'react'
import { Header } from "../Header/Header";
import { Outlet } from 'react-router-dom';
import './layout.module.css'


export const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
            </Suspense>
        </>
    
    )
}