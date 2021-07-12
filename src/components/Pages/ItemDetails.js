import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import QuantitySelect from '../Inputs/QuantitySelect';
import NoMatch from './NoMatch';
import inventory from '../../inventory.json';

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [, dispatch] = useContext(CartDataContext);
  const params = useParams();

  useEffect(() => {
    document.title = item ? `${item.name} | Enbious` : 'Enbious';
  }, [item]);

  useEffect(() => {
    setItem(inventory.clothing[params.itemId]);
  }, [params]);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleCartAdd = () => {
    return dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...item,
        quantity,
      },
    });
  };

  return item ? (
    <div className='item-details-container'>
      <h1>{item.name}</h1>
      <div className='item-description'>{item.description}</div>
      <label htmlFor='quantity'>Quantity</label>
      <QuantitySelect
        changeEvent={handleQuantityChange}
        inputId='quantity'
        stock={item.stock}
        quantity={quantity}
      />
      <button className='add-cart-btn' onClick={handleCartAdd}>
        Add to Cart
      </button>
    </div>
  ) : (
    <NoMatch />
  );
}
