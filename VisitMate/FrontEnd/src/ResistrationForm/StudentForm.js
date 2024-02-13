import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    studentName: '',
    gender: '',
    email: '',
    phno: '',
    address: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post('http://localhost:3001/login/create', {
        username: formData.username,
        password: formData.password,
        role: 'student'
      });
        const data={
          userid:loginResponse?.data?.data?.userid,
          username: loginResponse?.data?.data?.username,
          name: formData.studentName,
          gender:formData.gender,
          email: formData.email,
          Phno: formData.phno,
          address:formData.address,
          department:formData.department,
        }
   console.log(data, "data");
      console.log(loginResponse, "loginResponse");
      if (loginResponse.data.message === 'Login created successfully') {
        const studentResponse = await axios.post('http://localhost:3001/student/create', {
          userid:loginResponse?.data?.data?.userid,
          username: loginResponse?.data?.data?.username,
          name: formData.studentName,
          gender:formData.gender,
          email: formData.email,
          Phno: formData.phno,
          address:formData.address,
          department:formData.department
        });

        console.log(studentResponse.data, "studentResponse.data");

        setFormData({
          username: '',
          password: '',
          studentName: '',
          gender: '',
          email: '',
          phno: '',
          address: '',
          department: ''
        });
      
        alert('Student created successfully');
        navigate("/");
      } else {
        alert('Error creating login. Please try again.');
      }

    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error creating student. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4 text-info">Student Form</h2>
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
              <label className="text-secondary">Student Name:</label>
              <input
                type="text"
                className="form-control"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Gender:</label>
              <input
                type="text"
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
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
            <div className="form-group">
              <label className="text-secondary">Address:</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Department:</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
