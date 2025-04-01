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
    <div className="card p-4 shadow-lg rounded border-0 bg-black text-light">
      <h2 className="text-center text-primary">Add Student</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <input className="form-control bg-dark text-light border-secondary" type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-control bg-dark text-light border-secondary" type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <button className="btn btn-primary" type="submit">Add Student</button>
      </form>
      {message && <p className="text-success text-center mt-2">{message}</p>}
    </div>
  );
};

export default StudentForm;
