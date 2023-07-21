import express from 'express';
import { createCancha, deleteCancha, getCancha, getCanchas, updateCancha } from '../controllers/cancha.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE

router.post("/:complejoid", verifyAdmin, createCancha)

//UPDATE

router.put("/:id", verifyAdmin, updateCancha)

//DELETE

router.delete("/:id/:complejoid", verifyAdmin, deleteCancha)

//GET

router.get("/:id", getCancha)

//GET ALL

router.get("/", getCanchas)

export default router