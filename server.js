const app = require('./app')
const config = require('config')
/*******CONFIGS*******/
//EXPORT NODE_ENV='production'=>production config file
//EXPORT NODE_ENV='testing'=>testing config file
//default config will be loaded if nothing is specified


/******DB******/
const mongoose = require('mongoose')
const conString=config.get('db.conString')
mongoose.connect(conString,()=>{
    console.log("Db Connected")
})


/******SERVER*******/
const host=config.get('app.host')
const port = config.get('app.port')

app.listen(port,host,()=>{
    console.log(`App Listening on port ${port}`)
})