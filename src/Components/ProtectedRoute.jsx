
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    
    return <div className="text-center p-4">Loading...</div>;
  }

  return isSignedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
