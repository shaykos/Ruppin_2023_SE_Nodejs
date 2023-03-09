const os = require("os");
const path = require("path");

//ייבוא הפונקציות מהקובץ
const funcs = require('./functions');

function Main() {
  // console.log('Hello world');
  // let a = 5, b = 10;
  // console.log(a + b);

  // console.log(os.type());
  // console.log(os.version());
  // console.log(os.homedir());

  // console.log(__dirname);

  // console.log(path);

  console.log(funcs.sum(9,8));

}

Main();