js
import React from "react";
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
    return (
        <div className='prosection'>
            {mobileData.map((item) => {
                return (
                    <div className="ingBox" key={item.id}>
                        <img className='proImage' src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>Price: {item.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Mobiles;

