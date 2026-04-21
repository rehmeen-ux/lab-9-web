const fs = require('fs');


const data = "Name: Rehmeen\nCourse: ADSCS\nUniversity: Air University";


fs.writeFileSync('student.txt', data);


const readData = fs.readFileSync('student.txt', 'utf-8');

console.log("File Content:\n", readData);