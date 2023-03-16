const fs = require('node:fs');
const path = require('node:path');

fs.readFile(path.join(__dirname, 'files', 'first.txt'), (err, data) => {
  if (err) throw err;

  let txt = data.toString();

  fs.unlink(path.join(__dirname, 'files', 'first.txt'), (err) => {
    if (err) throw err;

    fs.writeFile(path.join(__dirname, 'files', 'new.txt'), txt, (err) => {
      if (err) throw err;

      fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\nOreo is YUM, Oreo is GOOD!', (err) => {
        if (err) throw err;

        fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'oreoPromo.txt'), (err) => {
          if (err) throw err;

          console.log('done');
        });
      });
    });
  })
});