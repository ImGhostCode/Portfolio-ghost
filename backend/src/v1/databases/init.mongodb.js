const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(_ => console.log("Connected mongodb success!..."))
    .catch(error => console.error(`Connnect mongodb error:::`, error))

mongoose.set('debug', true);
mongoose.connection.on('disconnected', () => {
    console.log("Disconnected mongodb..")
})
mongoose.set('debug', { color: true })
mongoose.set('debug', { shell: false })

process.on('SIGINT', async () => {
    await mongoose.disconnect()
})

module.exports = mongoose