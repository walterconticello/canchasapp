import mongoose from 'mongoose';

const ComplejoSchema = new mongoose.Schema({
	nombre: {
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
	recomendados: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.model("Complejo", ComplejoSchema)