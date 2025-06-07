import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-[10px] shadow-lg overflow-hidden">
        {/* Header - matches your dropdown header style */}
        <div className="px-6 py-5 bg-blue-900 rounded-tl-[10px] rounded-tr-[10px]">
          <h1 className="text-white text-2xl font-bold">Page Not Found</h1>
          <p className="text-white text-sm mt-1">Error 404</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            {/* Illustration */}
            <div className="w-40 h-40 mb-6 flex items-center justify-center">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80" r="75" fill="#EFF6FF" />
                <path
                  d="M80 50V90"
                  stroke="#204C86"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M80 100C81.1046 100 82 99.1046 82 98C82 96.8954 81.1046 96 80 96C78.8954 96 78 96.8954 78 98C78 99.1046 78.8954 100 80 100Z"
                  fill="#204C86"
                />
                <path
                  d="M60 30L40 50M100 30L120 50"
                  stroke="#204C86"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M30 60L50 40M130 60L110 40"
                  stroke="#204C86"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Message */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">Oops! Page not found</h2>
            <p className="text-gray-600 text-center mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Back button - matches your logout button style */}
            <Link
              to="/"
              className="w-full max-w-xs h-10 bg-blue-900 rounded-[10px] flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              <FiArrowLeft className="text-white mr-2" />
              <span className="text-white text-sm">Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;