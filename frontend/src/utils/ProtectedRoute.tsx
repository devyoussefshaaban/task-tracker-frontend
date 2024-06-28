import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }: {isAuthenticated: boolean}) => {
  const location = useLocation()
  console.log({isAuthenticated})

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;