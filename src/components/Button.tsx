import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, isLoading }) => {
  return (
    <button className="btn btn-primary" onClick={onClick} >
      {isLoading? (<span className='loading loading-spinner'></span>): null}
      {!isLoading? (children) : null}
    </button>
  );
};

export default Button;