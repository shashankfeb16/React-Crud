import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Cars = () => {
    const [data, setData] = useState([]);
  const [data2, setData2] = useState("");
  const [value, setValue] = useState("");

  const getData = () => {
    axios.get("https://fake-mocker-server.herokuapp.com/cars").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const handleChange = (e) => {
    let price = e.target.value;
    console.log(price);
    if (price == "asc") {
      const sort = [...data].sort((a, b) => {
        return a.Price - b.Price;
      });
      console.log(sort);
      setData(sort);
    }
    if (price == "desc") {
      const sort = [...data].sort((a, b) => {
        return b.Price - a.Price;
      });
      console.log(sort);
      setData(sort);
    }
  };

  const handleChange2 = (e) => {
    let dis = e.target.value;
    console.log(dis);
    if (dis == "lth") {
      const sort = [...data].sort((a, b) => {
        return a.kms - b.kms;
      });
      console.log(sort);
      setData(sort);
    }
    if (dis == "htl") {
      const sort = [...data].sort((a, b) => {
        return b.kms - a.kms;
      });
      console.log(sort);
      setData(sort);
    }
  };
  const handleChange3 = (e) => {
    let filbrand = e.target.value;
    console.log(filbrand);
    axios
      .get(`https://fake-mocker-server.herokuapp.com/cars?brand=${filbrand}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const handleChange4 = (e)=>{
    let updatedprice = e.target.value;
    // console.log(updatedprice);
    setData2(updatedprice);
    console.log(data2)
    
  }

  const handleClick2 = (id)=>{
      let val = data2;
      axios.patch(`https://fake-mocker-server.herokuapp.com/cars/${id}`,{
        Price : +val
      }).then((res)=>{
        console.log(res.data);
        getData();
      })
  }

  const handleClick = (id) => {
    axios
      .delete(`https://fake-mocker-server.herokuapp.com/cars/${id}`)
      .then((res) => {
        console.log(res.data);
        getData()
      });
    console.log(id);
  };

  const handleClick3 = (e)=>{
    console.log(e);
    axios.post("https://fake-mocker-server.herokuapp.com/wishlisted_cars",{
      brand: e.brand,
      year: e.year,
      type:e.type,
      kms: e.kms,
      Description: e.Description,
      Price: e.Price
    }).then((res)=>{
      console.log(res)
    })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Link to="/">AD</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/wishlist">Wishlist</Link>
      <select value={value} onChange={handleChange}>
        <option value="">Select</option>
        <option value="asc">Price low to High</option>
        <option value="desc">Price High to low</option>
      </select>
      <select value={value} onChange={handleChange2}>
        <option value="">Select</option>
        <option value="lth">Distance low to High</option>
        <option value="htl">Distance Hogh to low</option>
      </select>
      <select value={value} onChange={handleChange3}>
        <option value="">Select</option>
        <option value="Maruti">Maruti Suzuki</option>
        <option value="Tata">Tata</option>
      </select>
      {data?.map((e) => {
        return (
          <div key={e.id}>
            <h3>{e.brand}</h3>
            <p>{e.year}</p>
            <p>{e.type}</p>
            <p>{e.kms}</p>
            <p>{e.Price}</p>
            <div>
              <input
                type="number"
                placeholder="Update Price"
                onChange={handleChange4}
              ></input>
              <button onClick={()=>handleClick2(e.id)}>Submit</button>
            </div>
            <button onClick={() => handleClick(e.id)}>Delete</button>
            <button onClick={()=> handleClick3(e)}>Wishlist</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cars