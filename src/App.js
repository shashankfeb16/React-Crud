import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MainRoutes from "./pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
