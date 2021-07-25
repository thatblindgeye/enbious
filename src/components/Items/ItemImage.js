import React from 'react';

export default function ItemImage({ image, imageClasses }) {
    return (
        <img
            className={`${imageClasses} elevation-04dp`}
            src={
                image
                    ? `${process.env.PUBLIC_URL}${image}`
                    : `${process.env.PUBLIC_URL}/public-assets/inventory-images/unavailable.png`
            }
            alt=''
        />
    );
}
