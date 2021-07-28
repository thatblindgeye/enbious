import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CartAddModal({ attemptCardAdd, closeModal }) {
    const focusButton = useRef();

    useEffect(() => {
        focusButton.current.focus();
    }, []);

    return (
        <div className='modal-mask' onClick={closeModal}>
            <div
                className='modal-container elevation-08dp'
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className='modal-message'>{attemptCardAdd.message}</h3>
                <div className='modal-actions'>
                    <Link
                        to='/cart'
                        className='button-outline modal-link'
                        ref={focusButton}
                    >
                        Go to Cart
                    </Link>
                    <button className='button-text' onClick={closeModal}>
                        Continue shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
