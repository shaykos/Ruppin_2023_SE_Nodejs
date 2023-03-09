const { AmountAfterDot, MaxNum, PrintStr } = require('./functions');

function Main() {

  console.log(MaxNum(10, 20, 5));

  PrintStr("hello", 5);

  console.log(AmountAfterDot(10.5698));

}


Main();