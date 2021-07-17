import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
    return (
        <div>
            <h2>
                <Link to={`/shop/${item.id}`} className='link'>
                    {item.name}
                </Link>
            </h2>
        </div>
    );
}
