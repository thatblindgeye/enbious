import React from 'react';
import { Link } from 'react-router-dom';
import ItemImage from './ItemImage';
import StockWarning from './StockWarning';

export default function ItemCard({ item }) {
    const { id, name, image, price, stock } = item;
    return (
        <div className='item-card'>
            <div className='primary-preview-container'>
                <Link
                    to={`/shop/${id}`}
                    className='preview-image-link'
                    aria-hidden='true'
                    tabIndex='-1'
                >
                    <ItemImage imageClasses='preview-image' image={image} />
                </Link>
            </div>
            <div className='secondary-preview-container'>
                <Link
                    to={`/shop/${id}`}
                    className='item-link'
                    aria-describedby={`price-${id} ${
                        stock < 20 ? `stock-warning-${id}` : null
                    }`}
                >
                    {name}
                </Link>
                <div id={`price-${id}`} className='item-price'>
                    ${price}
                </div>
                <StockWarning stock={stock} id={id} />
            </div>
        </div>
    );
}
