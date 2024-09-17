import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SuccessPopup from './SuccessPopup';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import Admin from './Admin';

// LoadingScreen component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
    </div>
  );
};

function SignUp() {
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const verifyAdmin = async () => {
        try {
          const token = await getIdTokenClaims();
          const response = await fetch('http://localhost:3000/verify-admin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.__raw}`,
            },
            body: JSON.stringify({ email: user.email }),
          });
          
          const result = await response.json();
          if (result.isAdmin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setIsAdmin(false);
        }
      };

      verifyAdmin();
    }
  }, [isAuthenticated, user, getIdTokenClaims]);

  useEffect(() => {
    if (isAuthenticated && isAdmin === false) {
      logout({ returnTo: window.location.origin });
      alert("You are Not Admin");
    }
  }, [isAuthenticated, isAdmin, logout]);

  const toggleDropdown = () => {
    setLoginDropdown(!loginDropdown);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 1500);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    alert("Logout Successful!"); // Message after logout
  };

  return (
    <>
      {isLoading && <LoadingScreen />} {/* Render LoadingScreen if isLoading is true */}

      <div className="fixed top-3 right-5 z-50">
        <div className="flex items-center space-x-4 px-4 py-2">
          <FaHeart className="text-white hover:text-red-600 hover:text-xl cursor-pointer" />
          <FaShoppingCart className="text-white hover:text-xl hover:text-gray-400 cursor-pointer" />
          <div className="ml-auto relative">
            {isAuthenticated ? (
              <button
                className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg transition-all duration-200"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-all duration-200"
                onClick={toggleDropdown}
              >
                Login
              </button>
            )}
            {loginDropdown && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
                onClick={toggleDropdown}
              >
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                  <button
                    className="w-full text-left"
                    onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                  >
                    Admin Login
                  </button>
                </div>
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                  <button
                    className="w-full text-left"
                    onClick={() => loginWithRedirect({ screen_hint: "login" })}
                  >
                    User Login
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showSuccessPopup && <SuccessPopup message="Login Successful!" />}
      {isAuthenticated && isAdmin && <Admin user={user} />}
    </>
  );
}

export default SignUp;
