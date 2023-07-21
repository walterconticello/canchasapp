import mongoose from 'mongoose';

const esquemaComplejo = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
	fotos: [String],
	descripcion: {
		type: String,
		required: true,
	},
	titulo: {
		type: String,
		required: true,
	},
	esRecomendado: {
		type: Boolean,
		default: false,
	},
	canchas: [String]
});

const Complejo = mongoose.model('Complejo', esquemaComplejo);

export default Complejo;
