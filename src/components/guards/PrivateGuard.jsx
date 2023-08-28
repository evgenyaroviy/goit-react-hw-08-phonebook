import { getAuth } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateGuard = ({ redirectTo = '/', component: Component }) => {
  const isAuth = useSelector(getAuth);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};