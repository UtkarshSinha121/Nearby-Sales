const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;



const UserRouter = require('./routers/userRouter');
const AddproductRouter = require('./routers/addProductRouter');
const UtilRouter = require('./routers/util');

app.use(cors({
    origin : ['https://sale-spotter.vercel.app']
}));
app.use(express.json());

app.use('/user', UserRouter);
app.use('/addproduct', AddproductRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

//creating routes
app.get('/',(req, res)=>{
    res.send('response from express server');
})

// /home
app.get('/home',(req, res)=>{
    res.send('response from express home');
})
// /add
app.get('/add',(req, res)=>{
    res.send('response from express add');

})

//starting the server
app.listen(port, () => {
    console.log('server started');
});