import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    altPhone: String,
    address: String,
    email: String, 
})

const Contact = new mongoose.model('Contact', contactSchema);

export default Contact;