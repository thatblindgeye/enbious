import React from 'react';
import { Link } from 'react-router-dom';

const StockWarning = ({ children }) => {
    return <div id='stock-warning'>{children}</div>;
};

export default function ItemCard({ item }) {
    const { id, name, stock } = item;
    return (
        <div>
            <h2>
                <Link
                    to={`/shop/${id}`}
                    className='link'
                    aria-describedby={stock < 10 ? 'stock-warning' : null}
                >
                    {name}
                </Link>
            </h2>
            {!stock ? (
                <StockWarning>Sold Out</StockWarning>
            ) : stock < 10 ? (
                <StockWarning>Only {stock} left!</StockWarning>
            ) : null}
        </div>
    );
}
