import { CardProps } from '@/interfaces';
import React from 'react';

const Card: React.FC <CardProps> = ({title, content}) => {
    return (
        <div className = "bg-white shadow rounded p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2" > {title} </h2> 
              <p className= "font-semibold"> {content} </p>

        </div>
    );
};

export default Card;