import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [industries, setIndustries] = useState([]);
console.log(industries , "industries");
/*this is the response of the indistry sate please show all industry information in  table below student table 
Array(20)
0
: 
CompanyInfo
: 
"Company ABC specializes in software development."
company
: 
"Company ABC"
industryid
: 
100
status
: 
"Active"
userid
: 
3
username
: 
"owner1"
*/
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    userid: '',
    username: '',
    name: '',
    gender: '',
    email: '',
    Phno: '',
    address: '',
    department: '',
    industryid: '',
    status: '',
    industryinfo: ''
  });

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

  const handleEditClick = (studentId) => {
    setEditingStudentId(studentId);
    const studentToEdit = students.find((student) => student.studentid === studentId);
    setEditedStudent({ ...studentToEdit });
  };

  const handleCancelClick = () => {
    setEditingStudentId(null);
    setEditedStudent({
      userid: '',
      username: '',
      name: '',
      gender: '',
      email: '',
      Phno: '',
      address: '',
      department: '',
      industryid: '',
      status: '',
      industryinfo: ''
    });
  };

  const handleSaveClick = async () => {
    try {
      // Update only the industryid while keeping other information as it is
      await axios.put(`http://localhost:3001/student/${editingStudentId}`, {
        industryid: editedStudent.industryid
        // Add other fields here as needed
      });
      // Refresh the student data after updating
      axios.get('http://localhost:3001/student/get')
        .then(response => setStudents(response.data))
        .catch(error => console.error('Error fetching students:', error));
      handleCancelClick();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id="wrapper">
      <div id="content" className="container">
        <h1>Welcome to the Admin Dashboard!</h1>
        <p>Here you can manage students, schedule industry visits, and modify upcoming visits.</p>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 py-3">
            <h2 className="text-center text-black mb-4">Welcome to the Student Dashboard!</h2>
         
            {/* Student Table */}
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Industry ID</th>
                    <th>Industry Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.studentid}>
                      <td>{student.studentid}</td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="name" disabled value={editedStudent.name} onChange={handleInputChange} />
                        ) : (
                          student.name
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="gender" disabled value={editedStudent.gender} onChange={handleInputChange} />
                        ) : (
                          student.gender
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="email" disabled value={editedStudent.email} onChange={handleInputChange} />
                        ) : (
                          student.email
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="Phno" disabled value={editedStudent.Phno} onChange={handleInputChange} />
                        ) : (
                          student.Phno
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="address" disabled value={editedStudent.address} onChange={handleInputChange} />
                        ) : (
                          student.address
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="department" disabled value={editedStudent.department} onChange={handleInputChange} />
                        ) : (
                          student.department
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="industryid" value={editedStudent.industryid} onChange={handleInputChange} />
                        ) : (
                          student.industryid
                        )}
                      </td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <input type="text" name="industryinfo" disabled value={editedStudent.industryinfo} onChange={handleInputChange} />
                        ) : (
                          student.industryinfo
                        )}
                      </td>
                      <td>{editedStudent.status}</td>
                      <td>
                        {editingStudentId === student.studentid ? (
                          <>
                            <button onClick={handleSaveClick}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                          </>
                        ) : (
                          <button onClick={() => handleEditClick(student.studentid)}>Edit</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* industry info */}
<div className="table-responsive">
  <h3>Industry Information</h3>
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Industry ID</th>
        <th>Company</th>
        <th>Status</th>
        <th>User ID</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      {industries.map((industry) => (
        <tr key={industry.industryid}>
          <td>{industry.industryid}</td>
          <td>{industry.company}</td>
          <td>{industry.status}</td>
          <td>{industry.userid}</td>
          <td>{industry.username}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          </div>
        </div>
      </div>



    </div>
  );
}

export default AdminDashboard;
