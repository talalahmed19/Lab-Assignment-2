import React from 'react';
import PropTypes from 'prop-types';

function LastSemester({ courses }) {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Talal Bin Altaf</h1>
      <ul style={{textAlign:'center'}}>
        {courses.map((course, index) => (
          <li key={index}>
            {course.name} 
            <button>{course.gpa}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

LastSemester.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gpa: PropTypes.number.isRequired
    })
  ).isRequired
};

const coursesData = [ 
  { name: 'Data Structure', gpa: 1.7 },
  { name: 'Database System', gpa: 2 },
  { name: 'Software Quality Engineering', gpa: 2 },
  { name: 'Software Requirement Engineering', gpa: 3 },
  { name: 'Entrepreneurship', gpa: 2.7 },
];

function App() {
  return (
    <div className="App">
      <LastSemester courses={coursesData} />
    </div>
  );
}

export default App;
