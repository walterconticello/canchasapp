import mongoose from 'mongoose';

const esquemaCancha = new mongoose.Schema(
	{
		titulo: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
			required: true,
		},
		precio: {
			type: Number,
			required: true,
		},
		tipoCancha: {
			type: String,
			required: true,
		},
		turnosDisponibles: [
			{
				fecha: { type: Date, required: true }, // Fecha y hora del turno disponible
				horasReservadas: [Number], // Horas reservadas en este turno
			},
		],
	},
	{ timestamps: true }
);

const Cancha = mongoose.model('Cancha', esquemaCancha);

export default Cancha;
