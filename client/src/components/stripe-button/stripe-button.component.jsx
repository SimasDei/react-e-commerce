import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_0E1uM2q4nlIUzCrCEraY8Yhj00YZIAlNi6';

  const handleToken = (token) => {
    axios({
      method: 'POST',
      url: 'payment',
      data: {
        amount: priceForStripe,
        token,
      }
    }).then(res => alert('Payment successful')).catch(error => console.log({error: JSON.parse(error)}));
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='React e-commerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLaber='Pay Now'
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
