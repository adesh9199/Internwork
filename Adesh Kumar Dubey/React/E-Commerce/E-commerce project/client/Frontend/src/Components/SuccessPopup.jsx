import React, { useEffect, useState } from 'react';

function SuccessPopup({ message, show }) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Auto-hide after 1.5 seconds
    }
  }, [show]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          {message}
        </div>
      )}
    </>
  );
}

export default SuccessPopup;
