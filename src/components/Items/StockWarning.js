import React from 'react';

export default function StockWarning({ id, stock }) {
    return (
        <div id={`stock-warning-${id}`} className='item-stock-warning'>
            {stock === 0
                ? 'Sold Out'
                : stock < 20
                ? `Only ${stock} left`
                : null}
        </div>
    );
}
