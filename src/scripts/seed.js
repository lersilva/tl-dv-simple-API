const db = require('../database/db')
const fs = require('fs');


; (async () => {
  try {

    const array = JSON.parse(fs.readFileSync('/app/src/database/mock.json', 'utf8'));
    await db('Video').insert(array);
    console.log('Added 1000 dummy videos!')
    process.exit(0);

  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
