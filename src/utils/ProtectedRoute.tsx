import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }: {isAuthenticated: boolean}) => {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;