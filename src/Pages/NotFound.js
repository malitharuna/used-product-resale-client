import React from 'react';
import image from '../assets/images/404img.jpg';


const NotFound = () => {
    return (
        <div>
            <h1>OOps !! Sorry</h1>
            <img src={image} alt=''/>
        </div>
    );
};

export default NotFound;