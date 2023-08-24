/* eslint-disable guard-for-in */
const http = require('http');
const fs = require('fs');

const path = process.argv[2];

const PORT = 1245;

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!\n');
      break;
    case '/students':
      res.write('This is the list of our students\n');
      fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
          res.end('Internal Server Error');
        }

        if (data) {
          const line = data.split('\n').filter((item) => item !== '');
          const numberOfStudents = line.length - 1;

          res.write(`Number of students: ${numberOfStudents}\n`);

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
            res.write(`Number of students in ${key}: ${processedDataCount[key]}. List: ${firstNameList}\n`);
          }
          res.end();
        }
      });
      break;
    default:
      res.end('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;
