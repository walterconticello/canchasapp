import express from 'express';
import Cancha from "../models/Canchas.js"

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {

	const newCancha = new Cancha(req.body)

	try {
		const savedCancha = await newCancha.save()
		res.status(200).json(savedCancha)
	} catch (error) {
		res.status(500).json(error)
	}
})
//UPDATE
//DELETE
//GET
//GET ALL

export default router