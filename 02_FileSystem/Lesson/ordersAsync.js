const fs = require('node:fs/promises');
const path = require('node:path');

exports.HandleFiles = async () => {
  try {
    //קריאת התוכן מתוך הקובץ
    let data = await fs.readFile(path.join(__dirname, 'files', 'first.txt'));
    //מחיקת הקובץ
    await fs.unlink(path.join(__dirname, 'files', 'first.txt'));
    //יצירת קובץ חדש עם טקסט
    await fs.writeFile(path.join(__dirname, 'files', 'new.txt'), data);
    //הוספת טקסט לקובץ 
    await fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\nOreo is YUM, Oreo is GOOD!!');
    //שינוי שם הקובץ
    await fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'oreoPromo.txt'));
    console.log('done');
  } catch (err) {
    console.error(err);
  }
}