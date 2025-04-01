import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="card p-4 shadow-lg rounded border-0 bg-black text-light">
      <h2 className="text-center text-primary">Student List</h2>
      <ul className="list-group">
        {students.length === 0 ? (
          <p className="text-center text-light">No students added yet.</p>
        ) : (
          students.map((student) => (
            <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-secondary">
              <span>{student.name} - {student.course}</span>
              <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentList;
