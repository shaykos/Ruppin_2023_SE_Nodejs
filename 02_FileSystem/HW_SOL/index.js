const { Create, ConcatFiles, DeleteFolder } = require('./functions');

async function Main() {
  await DeleteFolder('files');

  for (let i = 1; i <= 5; i++) {
    await Create(i, `text${i}text${i}text${i}`);
  }

  await ConcatFiles();

}

Main();