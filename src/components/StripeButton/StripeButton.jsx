import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_CF61YoZ5DVLDCkQXeTqxrggg";
  const onToken = token => {
    console.log(token);
    alert(token);
  };
  return (
    <StripeCheckout
      lable="Pay Now"
      name="Raja clothing ltd"
      billingAddress
      shippingAddress
      image="https://randomuser.me/api/portraits/women/56.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
