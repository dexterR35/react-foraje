import React from 'react';

export default function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white z-[60]"
      role="status"
      aria-label="Se încarcă..."
    >
      <svg
        className="animate-spin h-10 w-10 text-primary"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="sr-only">Se încarcă...</span>
    </div>
  );
}