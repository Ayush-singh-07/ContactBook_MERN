import express from 'express';
import dotenv from 'dotenv';
import connection from './db/connection.js';
import cors from 'cors';
import routes from './routes/api.js'

const app  = express();


app.use(express.json());
app.use(cors());
app.use("/api", routes);

dotenv.config();
connection(process.env.DB_URL)
.then(()=>{console.log("Connected to DB")})
.catch(err => console.log(err))


app.listen("5000", ()=>{
    console.log("Server is Listening on 5000")
})