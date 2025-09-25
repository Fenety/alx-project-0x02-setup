import {ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({label, size, shape, onClick}) => {
    let fontSizeClass = 'text-base';
    let paddingClass = 'px-4 py-2';

    switch (size) {
      case 'small':
        fontSizeClass = 'text-sm';
        paddingClass = 'px-2 py-1';
        break;
      case 'large':
        fontSizeClass = 'text-lg';
        paddingClass = 'px-6 py-3';
        break;
      default:
        break;
    }    


    return (
    <button 
        className = {"bg-green-500 hover:bg-blue-700 text-black font-bold  ${paddingClass} ${fontSizeClass} ${shape}"}
        onClick={onClick}
    >
        {label}
    </button>
      );
};


export default Button;