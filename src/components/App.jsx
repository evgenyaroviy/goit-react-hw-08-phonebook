import { Routes, Route } from 'react-router-dom'
import { lazy, useEffect } from 'react';
import { Layout } from "./Layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshing } from './redux/selectors';
import { userRefreshThunk } from './redux/thunks';
import { PrivateGuard } from './guards/PrivateGuard';
import { PublicGuard } from './guards/PublicGuard';
import { ErrorNotification } from './Error/Error';
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage/PhonebookPage'));




export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  
  useEffect(() => {
    dispatch(userRefreshThunk());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <ErrorNotification />
      <Toaster />
    {isRefreshing ? (
        <h2>Refreshing page</h2>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PrivateGuard
                  redirectTo="/contacts"
                  component={<SignUp />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PrivateGuard
                  redirectTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PublicGuard
                  redirectTo="/login"
                  component={<PhonebookPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};