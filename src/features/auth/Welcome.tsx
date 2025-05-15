import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { motion } from 'framer-motion';

const Welcome: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2">🎉 Welcome, {user?.username}!</h1>
        <p className="text-lg text-gray-600 mb-4">We're glad to have you here 🙌</p>

        <div className="my-6 text-left text-gray-700 space-y-2">
          <p>
            📧 <strong>Email:</strong> {user?.username}
          </p>
          <p>
            🕒 <strong>Last login:</strong> Just now
          </p>
          <p>
            🌐 <strong>Status:</strong> Active
          </p>
        </div>

        <motion.button
          onClick={logout}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all duration-300"
        >
          🚪 Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome;
