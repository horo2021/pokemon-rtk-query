import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
