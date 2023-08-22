/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');

    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const studentsByField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      const field = values[fieldIndex].trim();

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(values[0].trim());
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in studentsByField) {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
