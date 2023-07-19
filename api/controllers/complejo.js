import Complejo from "../models/Complejo.js";

export const createComplejo = async (req, res, next) => {
	const newComplejo = new Complejo(req.body)
	try {
		const savedComplejo = await newComplejo.save()
		res.status(200).json(savedComplejo)
	} catch (err) {
		next(err);
	}
}

export const updateComplejo = async (req, res, next) => {
	try {
		const updatedComplejo = await Complejo.findByIdAndUpdate(req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedComplejo)
	} catch (err) {
		next(err);
	}
}


export const deleteComplejo = async (req, res, next) => {
	try {
		await Complejo.findByIdAndDelete(req.params.id);
		res.status(200).json("El complejo se elimino")
	} catch (err) {
		next(err);
	}
}

export const getComplejo = async (req, res, next) => {
	try {
		const complejo = await Complejo.findById(req.params.id);
		res.status(200).json(complejo)
	} catch (err) {
		next(err);
	}
}

export const getComplejos = async (req, res, next) => {
	try {
		const complejos = await Complejo.find();
		res.status(200).json(complejos)
	} catch (err) {
		next(err);
	}
}