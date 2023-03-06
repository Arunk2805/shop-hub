import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const state = useSelector((state) => state.cart);
  // console.log(cart.length)

  const [address, setAddresss] = useState({
    fname: "",
    lname: "",
    email: "",
    address1: "",
    address2: "",
    phone: "",
  });

  const { fname, lname, email, address1, address2, phone } = address;

  const handleChange = (e) => {
    let newAddress = { ...address };
    newAddress[e.target.name] = e.target.value;
    setAddresss(newAddress);
  };
  const clearFrom =()=>{
    setAddresss({
      fname: "",
      lname: "",
      email: "",
      address1: "",
      address2: "",
      phone: "",
    })
  }

  const navigate = useNavigate()
  const gotoPayment=()=>{
    navigate("/payment")
    clearFrom()
  }
  
  
  var total = 0;
  const listItems = (item,i) => {
    total = total+(item.price*item.qty)
    return (

      <li className="list-group-item d-flex justify-content-between lh-sm" key={i}>
        <div>
          <h6 className="my-0">{item.title}</h6>
          <small className="text-muted"> quantity : {item.qty}</small><br />
          <small className="text-muted"> category : {item.category}</small>
        </div>
        <span className="text-muted">{item.qty * item.price}</span>
        
      </li>
    );
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row g-5 p-3 mx-3">
          <div className="col-md-5 col-lg-4 order-md-last ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3 border border-1">
              {state.map(listItems)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    name="fname"
                    value={fname}
                    required=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    name="lname"
                    value={lname}
                    required=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      placeholder="email"
                      value={email}
                      required=""
                      name="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="Address1" className="form-label">
                    Address 1{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address1"
                    placeholder="address"
                    value={address1}
                    required=""
                    name="address1"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="Address2" className="form-label">
                    Address 2{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address2"
                    placeholder="address"
                    value={address2}
                    required=""
                    name="address2"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="phone" className="form-label">
                    Mobile number{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="number"
                    value={phone}
                    required=""
                    name="phone"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-primary btn-lg"
                type="button"
                fdprocessedid="kvaluq" 
                onClick={gotoPayment}
              >
                Continue to Pay $ {total}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
