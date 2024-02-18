import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '', 
    name: '',
    emailID: '',
    phno: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to login table for admin
      const loginResponse = await axios.post('http://localhost:3001/login/create', {
        username: formData.username,
        password: formData.password,
        role: 'admin'
      });
      console.log(loginResponse, "adminResponse.data");
       console.log(loginResponse?.data?.data?.userid,"loginResponse?.data?.data?.userid");
       console.log(formData.username, "formData.username")
     
      if (loginResponse.data.message === 'Login created successfully') {
        const adminDetailsResponse = await axios.post('http://localhost:3001/admin/create', {
          userid:loginResponse?.data?.data?.userid,
          username: loginResponse?.data?.data?.username,
          name: formData.name,
          emailID: formData.emailID,
          phno: formData.phno,
          role: 'admin',
        });

        console.log(adminDetailsResponse, "adminDetailsResponse.data");

        setFormData({
          username: '',
          password: '',
          name: '',
          emailID: '',
          phno: ''
        });

        alert('Admin created successfully');
        navigate("/");
      } else {
        alert('Error creating admin. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error creating admin. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-primary">Admin Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-secondary">Username:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Email ID:</label>
              <input
                type="email"
                className="form-control"
                name="emailID"
                value={formData.emailID}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                name="phno"
                value={formData.phno}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
