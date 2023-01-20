const app = require('./app');
const connectToDB = require('./config/database');
// from "./config/database";

const PORT = process.env.PORT || 3000
connectToDB();
app.listen(PORT,()=>{
    console.log(`App is running at http://localhost:${PORT}`);
})