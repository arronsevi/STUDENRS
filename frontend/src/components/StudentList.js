import React from "react";

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

export default StudentList;
