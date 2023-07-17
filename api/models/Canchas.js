import mongoose from 'mongoose';

const CanchaSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	tipo: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
	fotos: {
		type: [String],
	},
	desc: {
		type: String,
		required: true,
	},
	titulo: {
		type: String,
		required: true,
	},
	horarios: {
		type: [String],
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	recomendados: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.model("Canchas", CanchaSchema)