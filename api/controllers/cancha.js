import Cancha from "../models/Cancha.js";
import Complejo from "../models/Complejo.js";
import { createError } from "../utils/error.js";


export const createCancha = async (req, res, next) => {

	const complejoId = req.params.complejoid;
	const newCancha = new Cancha(req.body)

	try {
		const savedCancha = await newCancha.save()
		try {
			await Complejo.findByIdAndUpdate(complejoId, {
				$push: { canchas: savedCancha._id },
			});
		} catch (err) {
			next(err);
		}
		res.status(200).json(savedCancha)
	} catch (err) {
		next(err);
	}

};

export const updateCancha = async (req, res, next) => {
	try {
		const updatedCancha = await Cancha.findByIdAndUpdate(req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedCancha)
	} catch (err) {
		next(err);
	}
}


export const deleteCancha = async (req, res, next) => {
	const complejoId = req.params.complejoid;
	try {
		await Cancha.findByIdAndDelete(req.params.id);
		try {
			await Complejo.findByIdAndUpdate(complejoId, {
				$pull: { canchas: req.params.id },
			});
		} catch (err) {
			next(err);
		}
		res.status(200).json("La cancha se elimino")
	} catch (err) {
		next(err);
	}
}

export const getCancha = async (req, res, next) => {
	try {
		const cancha = await Cancha.findById(req.params.id);
		res.status(200).json(cancha)
	} catch (err) {
		next(err);
	}
}

export const getCanchas = async (req, res, next) => {
	try {
		const canchas = await Cancha.find();
		res.status(200).json(canchas)
	} catch (err) {
		next(err);
	}
}