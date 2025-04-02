import React, { useState } from "react";

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
      <h2>Student name</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="form-input" 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="form-input" 
          type="text" 
          placeholder="Course" 
          value={course} 
          onChange={(e) => setCourse(e.target.value)} 
        />
        <button className="submit-btn" type="submit">Add Student</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default StudentForm;
