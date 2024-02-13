import React, { useState } from 'react';
import axios from 'axios';

function IndustrialForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    companyName: '',
    status: '',
    info: '',
    department: '',
    street: '', 
    city: '',  
    state: '',  
    postalCode: '', 
    country: '',  
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
      // Send data to login table for industrial user
      const loginResponse = await axios.post('http://localhost:3001/login/create', {
        username: formData.username,
        password: formData.password,
        role: 'industrialowner'
      });


      console.log(loginResponse.data, "loginResponse.data.data");
      
      const data={
        userid: loginResponse?.data?.data?.userid,
        username: loginResponse?.data?.data?.username,
        company: formData.companyName,
        status: formData.status,
        CompanyInfo: formData.info, 
      }
     

  console.log(data, "data");
      if (loginResponse.data.message === 'Login created successfully') {
        // Create industrial details
        const industryDetailsResponse = await axios.post('http://localhost:3001/industry/create', {
          userid: loginResponse?.data?.data?.userid,
          username:  formData.username,
          company: formData.companyName,
          status: formData.status,
          CompanyInfo: formData.info,
         
        });
        console.log("industryDetailsResponse", industryDetailsResponse.data);

       if  (industryDetailsResponse.data.message === 'Industry created successfully') {
  
          const addressResponse = await axios.post(`http://localhost:3001/address/create`, {
            industryid:industryDetailsResponse.industry?.industryid,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            postalCode: formData.postalCode,
            country: formData.country,
          });

          console.log(addressResponse.data, "addressResponse.data");
            
          setFormData({
            username: '',
            password: '',
            companyName: '',
            status: '',
            info: '',
            department: '',
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
          });

          alert('Industrial user and address created successfully');
        } else {
          alert('Error creating industrial details. Please try again.');
        }
      } else {
        alert('Error creating industrial user. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error creating industrial user. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4 text-primary">Industrial Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-secondary">Username:</label>
              <input
                type="text"
                className="form-control text-primary"
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
              <label className="text-secondary">Company Name:</label>
              <input
                type="text"
                className="form-control text-success"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Status:</label>
              <select
                className="form-control text-danger" 
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="form-group">
              <label className="text-secondary">Additional Information:</label>
              <textarea
                className="form-control text-warning" 
                name="info"
                value={formData.info}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Department:</label>
              <input
                type="text"
                className="form-control text-info" 
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Street:</label>
              <input
                type="text"
                className="form-control text-secondary"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">City:</label>
              <input
                type="text"
                className="form-control text-secondary"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">State:</label>
              <input
                type="text"
                className="form-control text-secondary"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Postal Code:</label>
              <input
                type="text"
                className="form-control text-secondary"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Country:</label>
              <input
                type="text"
                className="form-control text-secondary"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-3">
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

export default IndustrialForm;