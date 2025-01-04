import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="80"
      height="80"
      className="text-blue-500"
    >
      {/* Outer Circle */}
      <circle cx="12" cy="12" r="10" fill="#e0f2fe" />

      {/* Checklist Icon */}
      <rect x="8" y="7" width="8" height="2" rx="1" fill="#0284c7" />
      <rect x="8" y="11" width="5" height="2" rx="1" fill="#0284c7" />
      <rect x="8" y="15" width="6" height="2" rx="1" fill="#0284c7" />

      {/* Checkmark */}
      <path
        d="M6.5 15.5l1.5 1.5 3-3"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
