const express = require('express')
const app = express()


/******MIDDLEWARES*******/
const morgan = require('morgan')
const {requestTimeStamp} = require('./middlewares/RequestMiddleWares')


app.use(morgan('dev'))
app.use(express.json())
app.use(requestTimeStamp)



/*****API ROUTES******/
const TourRoute = require('./routers/TourRouter')
const UserRoute = require('./routers/UserRouter')

app.get('/ping',(req,res,next)=>{
    res.send("Alive")
})

app.use("/api/v1/tour",TourRoute)
app.use("/api/v1/user",UserRoute)





module.exports = app