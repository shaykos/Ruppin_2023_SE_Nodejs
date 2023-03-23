const { EventHandler } = require('./utils/EventHandler');


async function Main() {

  // //יצירת אובייקט האחראי על ניהול והפעלת אירועים
  // let myEventHandler = new EventHandler();

  // //יצירת אירוע בשם "קוקו". כל פעם שיקרה תוצג הודעה למשתמש
  // myEventHandler.on('kuku', (n, msg) => { console.log(msg, n) });

  // //מדמה את הפעלת האירוע כל פרק זמן מסויים
  // setInterval(() => {
  //   //הפעלת האירוע עצמו
  //   myEventHandler.emit('kuku', Math.random(), 'text');
  // }, 1000 * 5);


  EventHandler.CreateEvent('SQL_ERR', (n, msg) => { console.log(msg, n) });


  //מדמה את הפעלת האירוע כל פרק זמן מסויים
  setInterval(() => {
    //הפעלת האירוע עצמו
    EventHandler.RunEvent('SQL_ERR', {n: Math.random(), msg: 'connection error'});
  }, 1000 * 2);
}

Main();
