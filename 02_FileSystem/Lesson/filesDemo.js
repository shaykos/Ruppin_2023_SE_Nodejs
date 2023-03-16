const fs = require('node:fs');
const path = require('node:path');

//read file
fs.readFile(path.join(__dirname, 'files', 'first.txt'), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//write file
fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'some data to write', (err) => {
  if (err) throw err;
});

//append file
fs.appendFile(path.join(__dirname, 'files', 'first.txt'), '\n\nappend data to file', (err)=>{
  if(err) throw err;
});