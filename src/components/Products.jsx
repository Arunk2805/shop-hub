import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Products = () => {
  const [dataInfo, setDataInfo] = useState([]);

  const [filter, setFilter] = useState(dataInfo);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    let response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setDataInfo(res.data);
        setFilter(res.data);
        setLoading(false);
        // console.log(res.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = dataInfo.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return <>Loading ....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center  ">
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              setFilter(dataInfo);
            }}
          >
            All
          </div>

          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's clothing
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's clothing
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            jewelery
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3   " key={product.id} id="product-content">
              <div className="card h-100 p-4 text-center shadow shadow-1 border border-1">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height={220}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text fw-bold">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-warning"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row ">
          <div className="col-12">
            <h3 className="text-center">Latest Products </h3>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center pt-4 mt-1">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
