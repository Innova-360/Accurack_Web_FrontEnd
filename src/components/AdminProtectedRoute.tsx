import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy authentication check (replace with real logic)
const isAuthenticated = () => {
    // Example: check localStorage or context for admin token
    //   return localStorage.getItem('isAdmin') === 'true';
    return true
};

const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default AdminProtectedRoute;
