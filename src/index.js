import express, { json } from 'express';
import { connect } from 'mongoose';
require("dotenv").config();
import userRoutes from './routes/user'; 


const app = express();
const port = process.env.PORT || 9000;

//CORS
import cors from 'cors';
app.use(cors())


//middleware

app.use(json());
app.use('/api', userRoutes);


//routes


app.get('/', (req, res) =>{
    res.send("Welcome to my API")
});

//mongodb connection
connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error))


app.listen(port, () => console.log('server listening on port', port))