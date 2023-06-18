import express from 'express';
import * as handlers from '../controller/mainController.js';



const router =  express.Router();

router.get('/', handlers.getAllData);
router.post('/add', handlers.addNewContact);
router.put('/update/:id', handlers.updateContact);
router.delete('/delete/:id', handlers.deleteContact);

export default router;