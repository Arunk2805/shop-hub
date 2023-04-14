import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
 

  
  const clearForm = () => {
    setProduct({
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };
  const handleChange = (e) => {
    let newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  };

  const [products,setProducts] = useState([])

 

  const { id, title, price, description, category, image } = product;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7">
          <h3 className="text-center py-3">Add products to products page !</h3>
          <form>
            <input
              type="text"
              name="id"
              id=""
              className=" form-control my-3 "
              value={id}
              placeholder="Id"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              name="title"
              id=""
              className=" form-control mb-3"
              value={title}
              placeholder="Title"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              name="price"
              id=""
              className=" form-control mb-3"
              value={price}
              placeholder="price"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              name="description"
              id=""
              className=" form-control mb-3"
              value={description}
              placeholder="description"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              name="category"
              id=""
              className=" form-control mb-3"
              value={category}
              placeholder="category"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              name="image"
              id=""
              className=" form-control mb-3"
              value={image}
              placeholder="image"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          <button
            className="btn btn-success m-3 py-2"
            type="button"
            
          >
            addProduct
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
