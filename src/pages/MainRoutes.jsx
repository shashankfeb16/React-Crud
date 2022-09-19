import React from "react";
import { Route, Routes } from "react-router-dom";
import Ad from "./Ad";
import Cars from "./Cars";
import Wishlist from "./Wishlist";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Ad></Ad>}></Route>
      <Route path="/cars" element={<Cars></Cars>}></Route>
      <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
    </Routes>
  );
};

export default MainRoutes;
