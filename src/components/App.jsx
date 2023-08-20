import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react';
import { Layout } from "./Layout/Layout";

const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage/PhonebookPage'));

// const Layout = lazy(() => import('./Layout/Layout'));



export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='signup' element={<SignUp /> } />
          <Route path='login' element={<Login />} />
          <Route path='phonebook' element={<PhonebookPage />} />
        </Route>
    </Routes>
  );
};