import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
  strike?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, isLoading, strike }) => {
  return (
    <button className={`btn btn-primary ${strike ? 'line-through' : ''}`} onClick={onClick}>
      {isLoading ? (<span className='loading loading-spinner'></span>) : null}
      {!isLoading ? (children) : null}
    </button>
  );
};

export default Button;