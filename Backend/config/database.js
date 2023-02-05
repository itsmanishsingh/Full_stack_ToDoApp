const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectToDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn)=>{
        console.log(`Connection to DB successfull:${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log(`error.message`);
        process.exit(1);
    })
}

module.exports = connectToDB;