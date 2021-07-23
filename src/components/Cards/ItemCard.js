import React from 'react';
import { Link } from 'react-router-dom';

const StockWarning = ({ stock, id }) => {
    return (
        <div id={`stock-warning-${id}`} className='item-stock-warning'>
            {stock === 0
                ? 'Sold Out'
                : stock < 20
                ? `Only ${stock} left`
                : null}
        </div>
    );
};

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
                    <img
                        className='preview-image'
                        src={
                            image
                                ? image
                                : `${process.env.PUBLIC_URL}/public-assets/inventory-images/unavailable.png`
                        }
                        alt=''
                    />
                </Link>
            </div>
            <div className='secondary-preview-container'>
                <Link
                    to={`/shop/${id}`}
                    className='item-link'
                    aria-describedby={`price-${id} ${
                        stock < 10 ? `stock-warning-${id}` : null
                    }`}
                >
                    {name}
                </Link>
                <div id={`price-${id}`} className='item-price'>
                    ${price}
                </div>
                {stock < 10 ? <StockWarning stock={stock} id={id} /> : null}
            </div>
        </div>
    );
}
