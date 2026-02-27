import { Navigate } from 'react-router-dom';

const useAuth = () => {
    // Simulate authentication status
    const user = { isAuthenticated: false }; // Change to true to test access
    return user.isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;