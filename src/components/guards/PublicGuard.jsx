import { getAuth, selectRefreshing } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicGuard = ({ redirectTo = '/', component: Component }) => {
  const isRefreshing = useSelector(selectRefreshing);
  const isAuth = useSelector(getAuth);
  const shouldRedirect = !isRefreshing && !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};