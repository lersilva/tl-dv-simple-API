const db = require('../database/db')

;(async () => {
  try {
    await db.schema.dropTableIfExists('Video')
    await db.schema.withSchema('public').createTable('Video', (table) => {
      table.increments()
      table.string('name')
      table.string('url')
      table.string('thumbnailUrl')
      table.boolean('isPrivate')
      table.integer('timesViewed')
    })
    console.log('Created Video table!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
