const mongoose = require('mongoose');

const url = 'mongodb+srv://utkarshsinha:sinha@cluster0.6uiznnj.mongodb.net/SalesDB?retryWrites=true&w=majority';
mongoose.connect(url)
.then((result) => {
   // console.log(result);
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
});

module.exports = mongoose;