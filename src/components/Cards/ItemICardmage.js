import React from 'react';

function ImageUnavailable() {
    return (
        <div className='image-unavailable elevation-04dp'>
            Image
            <br />
            Unavailable
        </div>
    );
}

export default function ItemImage({ image }) {
    return (
        <div className='preview-image'>
            {image ? <img src={image} alt='' /> : <ImageUnavailable />}
        </div>
    );
}
