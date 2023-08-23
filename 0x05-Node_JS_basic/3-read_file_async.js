/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        const line = data.split('\n').filter((item) => item !== '');
        const numberOfStudents = line.length - 1;

        console.log(`Number of students: ${numberOfStudents}`);

        const processedDataCount = {};
        const firstNameByCourse = {};

        line.map((row) => {
          const fields = row.split(',');
          const field = fields[3];
          const firstName = fields[0];
          if (field !== 'field') {
            if (!processedDataCount[field]) {
              processedDataCount[field] = 0;
              firstNameByCourse[field] = [];
            }
            processedDataCount[field] += 1;
            firstNameByCourse[field].push(firstName);
          }
          return 0;
        });

        for (const key in processedDataCount) {
          const firstNameList = firstNameByCourse[key].join(', ');
          console.log(`Number of students in ${key}: ${processedDataCount[key]}. List: ${firstNameList}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
