import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const [data, setData] = useState([]);
  const getWishlist = () => {
    axios
      .get("https://fake-mocker-server.herokuapp.com/wishlisted_cars")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div>
      <Link to="/">AD</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/wishlist">Wishlist</Link>
      {data?.map((e) => {
        return (
          <div key={e.id}>
            <h3>{e.brand}</h3>
            <p>{e.year}</p>
            <p>{e.type}</p>
            <p>{e.kms}</p>
            <p>{e.Price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
