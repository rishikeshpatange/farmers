import React, { useState } from 'react';
import './FarmerRegister.css';

function FarmerRegister() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    crops: "",
    soil: "",
    location:"",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    
      e.preventDefault();


    const { name, email, phone, crops, soil,location } = user;

    const res = await fetch("https://farmer-2215b-default-rtdb.firebaseio.com/farmerData.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        crops,
        soil,
        location,

      })
    });

    if (res) {
      setUser({
        name: "",
        email: "",
        phone: "",
        crops: "",
        soil: "",
        location: "",
      });
      alert("You have been registered")
    } else{
      alert("please fill the data")
    }
  


  };

  return (
    <div className='farmerRegister'>
      <form className='form' action="" method='POST'>
      <h1>Eager to work with us?</h1>
      <p>Leave us your details below and we’ll get in touch with you.</p>

        <div className="input_container">
          <input type="text" name='name' value={user.name} onChange={getUserData} placeholder='Full Name' required  />
          <input type="email" name='email' value={user.email} onChange={getUserData} placeholder='Email'  />
        </div>

        <div className="input_container">
          <input type="phone" name='phone' value={user.phone} onChange={getUserData} placeholder='Phone Number' />
          <input type="crops" name='crops' value={user.crops} onChange={getUserData} placeholder='Crops' required />
        </div>

        <div className="input_container">
          <input type="soil" name='soil' value={user.soil} onChange={getUserData} placeholder='Type of soil' />
          <input type="location" name='location' value={user.location} onChange={getUserData} placeholder='Your Location'  required/>
        </div>


        <input className="form_btn" type='submit' onClick={postData} value="Register" />
      </form>

    </div>
  )
}

export default FarmerRegister