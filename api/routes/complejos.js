import express from 'express';
import { createComplejo, deleteComplejo, getComplejo, getComplejos, updateComplejo } from '../controllers/complejo.js';


const router = express.Router();

//CREATE

router.post("/", createComplejo)

//UPDATE

router.put("/:id", updateComplejo)

//DELETE

router.delete("/:id", deleteComplejo)

//GET

router.get("/:id", getComplejo)

//GET ALL

router.get("/", getComplejos)

export default router