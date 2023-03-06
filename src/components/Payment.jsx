import React from "react";
import StripeCheckout from "react-stripe-checkout";
const Payment = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="text-center my-5 ">
      <h3 className="text-decoration-underline text-primary">
        Welcome To Payment Page{" "}
      </h3>
      <h3 className="my-3"> Make Payment Using Below Method </h3>
      
      <StripeCheckout
        token={onToken}
        name="Enter your card details"
        stripeKey="pk_test_51MidHlSG728C5chMvkWGJ1bjkVLS7Kb17rNqN1asxqo10N8cqtuIo2YYs8HjhJfDJj1kGaKuEVDyukzKRQ1BfLtt00k1yc1RAQ"
        
      />
     
    </div>
  );
};

export default Payment;
