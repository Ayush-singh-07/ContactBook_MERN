import mongoose from "mongoose";

async function connection(DB_URL){
    await mongoose.connect(DB_URL);
}


export default connection;