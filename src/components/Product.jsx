import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemAction } from "../store/actions/actions";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(id);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    // console.log("added to cart")
    dispatch(addItemAction(product));
    navigate("/products");
  };

  const getProduct = async () => {
    setLoading(true);
    let res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const Loading = () => {
    return <div> Loading ....</div>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-3 ">
          <img src={product.image} alt={product.title} height={300}  />
        </div>
        <div className="col-md-6 my-3">
          <h4 className=" text-uppercase">{product.category}</h4>
          <h1 className=" display-5 lead">{product.title}</h1>
          <h3 className=" fw-bold p5"> Price ${product.price}</h3>

          <p className="">{product.description}</p>
          <button
            className="btn btn-dark px-3 m-3"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart{" "}
          </button>
          <Link to="/cart" className="btn btn-warning  px-3 ">
            Go to cart{" "}
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
