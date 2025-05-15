import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Welcome: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Welcome, {user?.username}!</h1>
        <button
          onClick={logout}
          className="mt-4 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
