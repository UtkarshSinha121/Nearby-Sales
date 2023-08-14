const {model, Schema} = require('../connection');

const myschema = new Schema({
    image: String,
    shopname: String,
    offer: String,
    startdate: String,
    expirydate: String,
    startmonth: String,
    expirymonth: String,
    location: String,
    owner: String,
    link: String
    
});

 module.exports = model('addproduct', myschema);