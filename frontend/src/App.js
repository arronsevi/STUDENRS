import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      return;
    }
    await addStudent(name, course);
    setName("");
    setCourse("");
    setMessage("Student added successfully!");
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <button className="submit-btn" type="submit">Add Student</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="list-container">
      <h2>Student List</h2>
      <ul className="student-list">
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student) => (
            <li key={student.id} className="student-item">
              <span>{student.name} - {student.course}</span>
              <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("http://localhost:5000/api/students");
    setStudents(response.data);
  };

  const addStudent = async (name, course) => {
    await axios.post("http://localhost:5000/api/students", { name, course });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="app-container">
      <h1>PTC STUDENT RECORDING SYSTEMgit add .
</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
};

export default App;
