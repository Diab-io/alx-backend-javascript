/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const studentsByField = {};

      for (let i = 1; i < lines.length; i += 1) {
        const [firstName, lastName, age, field] = lines[i].split(',');

        if (firstName && lastName && age && field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
      }

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in studentsByField) {
        const studentsList = studentsByField[field].join(', ');
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
