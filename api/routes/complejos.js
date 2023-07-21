import express from 'express';
import { createComplejo, deleteComplejo, getComplejo, getComplejos, updateComplejo } from '../controllers/complejo.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//CREATE

router.post("/", verifyAdmin, createComplejo)

//UPDATE

router.put("/:id", verifyAdmin, updateComplejo)

//DELETE

router.delete("/:id", verifyAdmin, deleteComplejo)

//GET

router.get("/:id", getComplejo)

//GET ALL

router.get("/", getComplejos)

export default router