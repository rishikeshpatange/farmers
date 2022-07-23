import React, { useState } from 'react';
import './CustomerRegister.css'

function CustomerRegister() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
      });
    
      let name, value;
      const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUser({ ...user, [name]: value });
      };
    
      const postData = async (e) => {

          e.preventDefault();
    
        const { name, email, phone,location } = user;
    
        const res = await fetch("https://farmer-2215b-default-rtdb.firebaseio.com/customerData.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            name,
            email,
            phone,
            location,
    
          })
        });
    
        if (res) {
          setUser({
            name: "",
            email: "",
            phone: "",
            location: "",
          });
          alert("You have been registered")
        }
        else{
          alert("please fill the data")
        }
    
      };
  return (
    <div className='CustomerRegister'>
      <form className='form' action="" method='POST'>
      <h1>Buy vegetables online handpicked specially</h1>
      <p>Leave us your details below and we’ll get in touch with you.</p>

        <div className="input_container">
          <input type="text" name='name' value={user.name} onChange={getUserData} placeholder='Full Name' required  />
          <input type="email" name='email' value={user.email} onChange={getUserData} placeholder='Email'  />
        </div>

        <div className="input_container">
          <input type="phone" name='phone' value={user.phone} onChange={getUserData} placeholder='Phone Number' />
          <input type="location" name='location' value={user.location} onChange={getUserData} placeholder='Your Location'  required/>
        </div>

        <input className="form_btn" type='submit' onClick={postData} value="Register" />
      </form>

    </div>
    
  )
}

export default CustomerRegister