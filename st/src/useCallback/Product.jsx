import React, { useCallback } from 'react';
import Form from './Form';
const Product = ({ productId, referrer, theme }) => {
  const handleSubmit = useCallback(
    orderDetails => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}

export default Product;
