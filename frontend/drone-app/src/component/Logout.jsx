import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call the logout API
        await axios.post('http://localhost:4001/api/users/logout', {}, {
          withCredentials: true // important for cookies
        });

        // Clear client-side state
        if (typeof onLogout === 'function') {
          onLogout();
        }

        // Redirect to landing page after a brief delay
        setTimeout(() => {
          navigate('/');
        }, 1000);

      } catch (error) {
        console.error('Logout failed:', error);
        // Still clear client-side state even if API fails
        if (typeof onLogout === 'function') {
          onLogout();
        }
        navigate('/');
      }
    };

    performLogout();
  }, [navigate, onLogout]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Logging out...</h2>
        <p>You're being securely logged out.</p>
        <div className="mt-4">
          <div className="inline-block h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Logout;