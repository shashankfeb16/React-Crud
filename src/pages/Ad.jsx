import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Ad = () => {
  const [form, setForm] = useState({
    brand: "",
    year: 0,
    type: "",
    kms: 0,
    Description: "",
    Price: 0,
  });


  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setData((data) => [...data, form]);
    axios.post("https://fake-mocker-server.herokuapp.com/cars",{
        ...form
    }).then((res)=>{
      console.log(res.data)
      alert("Ad posted")
    }).catch((err)=>{
      console.log(err);
    })

  };
  return (
    <div>
      <Link to="/">AD</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/wishlist">Wishlist</Link>
      <form onSubmit={handleSubmit}>
        <select name="brand" value={form.brand} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Maruti Suzuki">Maruti Suzuki</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Tata">Tata</option>
          <option value="Honda">Honda</option>
          <option value="Renault">Renault</option>
        </select>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Manual">Manual</option>
          <option value="AMT">Automatic</option>
        </select>
        <select name="year" value={form.year} onChange={handleChange}>
          <option value="">Select</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
        <input
          type="number"
          name="kms"
          value={form.kms}
          placeholder="Enter tottal kms driven "
          onChange={handleChange}
        />
        <input
          type="text"
          name="Description"
          value={form.Description}
          placeholder="Enter Descrition "
          onChange={handleChange}
        />
        <input
          type="number"
          name="Price"
          value={form.Price}
          placeholder="Enter Price "
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Ad;
