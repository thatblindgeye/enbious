import React from 'react';

export default function QuantitySelect({
  changeEvent,
  inputId,
  quantity,
  stock,
}) {
  const buildOptions = () => {
    let options = [];
    let optionLimit = stock > 10 ? 10 : stock;

    for (let i = 1; i <= optionLimit; i++) {
      options.push(<option key={i}>{i}</option>);
    }

    return options;
  };

  return (
    <select id={inputId} value={quantity} onChange={changeEvent}>
      {buildOptions().map((item) => {
        return item;
      })}
    </select>
  );
}
