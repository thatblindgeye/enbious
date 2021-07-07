/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect } from 'react';

export default function Shop() {
  useEffect(() => {
    document.title = 'Shop | Enbious';
  }, []);

  return <div>Shop Page</div>;
}
