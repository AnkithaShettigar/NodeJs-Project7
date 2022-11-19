const express = require('express');

const app = express();
const data1 = require('./Routes/Bollywood');
const data2 = require('./Routes/Technology');
const data3 = require('./Routes/Home');
const data4 = require('./Routes/Hollywood');
const data5 = require('./Routes/Fitness');
const data6 = require('./Routes/Food');
const cors = require('cors');

app.use(cors({
    origin:"*",//most preferred
}))

app.use('/home',data1)
app.use('/home',data2)
app.use('/home',data3)
app.use('/home',data4)
app.use('/home',data5)
app.use('/home',data6)

app.get('/',(req,res)=>{
    res.write("hello");
    res.end()
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server started...")
})