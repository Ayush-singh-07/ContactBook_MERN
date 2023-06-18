import express from 'express';
import Contact from '../model/contactModel.js'


const getAllData = async(req, res)=>{
    try{
         const results = await Contact.find({})
         res.send(results);
    }
    catch (err){
        console.log(err);
    }
}


const addNewContact = async(req, res)=>{
    const newItem = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        address: req.body.address,
        email: req.body.email,
    });
    try{
        const data = await newItem.save()
        res.status(200).json(data);
   }
   catch (err){
       console.log(err);
   }
}




const updateContact= async(req, res)=>{
    const id = req.params.id;
    const newItem = {
        name: req.body.name,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        address: req.body.address,
        email: req.body.email,
    };
    try{
        const foundData = await Contact.findOneAndReplace({_id: id}, newItem, {new: true})
        res.status(200).json(foundData);
    }
    catch (err){
        console.log(err);
    }
}



const deleteContact = async (req, res)=>{
    const id = req.params.id;
    try{
        const result = await Contact.deleteOne({_id: id})
        // console.log(result);
        res.status(200).json(result);
    }    
    catch(ex){
        console.log(ex);
    }
}

export {getAllData, addNewContact, updateContact, deleteContact};