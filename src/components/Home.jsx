import React from "react";
import bg from "../assects/bg.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <div className="card text-bg-dark border-0">
        <img src={bg} className="card-img " alt="background" height={577} />

        <div className="card-img-overlay  ">
          <div className="container  ">
            <h5 className="fw-bold display-4 " id="p1">
              NEW SEASON ARRIAVALS
            </h5>

            <p className=" fs-2 " id="p2">
              CHECK OUT ALL NEW TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
