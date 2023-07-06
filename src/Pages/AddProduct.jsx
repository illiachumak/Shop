import '../scss/AddProduct.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [formData, setFormData] = useState({
    index: 0,
    id: [0, 1],
    img: '',
    name: '',
    taste: ['Raspberry', 'Blueberry'],
    weight: ['250g', '300g'],
    popularity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'weight') {
      const weightArray = value.split(',');
      setFormData((prevData) => ({
        ...prevData,
        [name]: weightArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const field in formData) {
      if (formData[field] === '') {
        alert('Please fill in all fields');
        return;
      }
    }

    axios
      .post('http://localhost:3001/postproduct', formData)
      .then((response) => {
        if(response.data === 'succes'){
            alert('Product added to the list')
        }

        setFormData({
          index: 0,
          id: [0, 1],
          img: '',
          name: '',
          taste: ['Crunchy', 'Smooth'],
          weight: ['250g', '300g'],
          popularity:'',
          price: '',
        });
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="index">Index:</label>
      <input type="number" id="index" name="index" value={formData.index} onChange={handleChange} />

      <label htmlFor="id">ID:</label>
      <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />

      <label htmlFor="img">Image URL:</label>
      <input type="text" id="img" name="img" value={formData.img} onChange={handleChange} />

      <label htmlFor="name">Product Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="taste">Taste:</label>
      <input type="text" id="taste" name="taste" value={formData.taste} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleChange} />

      <label htmlFor="popularity">Popularity:</label>
      <input
        type="number"
        id="popularity"
        name="popularity"
        value={formData.popularity}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
