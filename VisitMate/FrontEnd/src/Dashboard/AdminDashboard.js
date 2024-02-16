import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import axios from 'axios';

const AdminDashboard = () => {
  const userData = useSelector(selectUserData);
  const [students, setStudents] = useState([]);
  const [industries, setIndustries] = useState([]);
  console.log("userData",userData);
  useEffect(() => {
    // Fetch students
    axios.get('http://localhost:3001/student/get')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));

    // Fetch industries
    axios.get('http://localhost:3001/industry/get')
      .then(response => setIndustries(response.data))
      .catch(error => console.error('Error fetching industries:', error));
  }, []);

  const getIndustryName = (industryId) => {
    const industry = industries.find(industry => industry.industryid === industryId);
    return industry ? industry.company : 'N/A';
  };

  return (
    <div className="container" id="wrapper">
      <h3 className="mt-5">All Student Information</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Industry</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.studentid}>
              <td>{student.studentid}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>
                {getIndustryName(student.industryid)}
              </td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
