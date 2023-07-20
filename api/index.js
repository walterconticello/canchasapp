import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import complejosRoute from "./routes/complejos.js"
import productosRoute from "./routes/productos.js"
import canchasRoute from "./routes/canchas.js"
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

const connect = async (req, res) => {
	try {
		await mongoose.connect(process.env.MONGO)
		console.log("Conectado a la base de datos")
	} catch (err) {
		throw err
	}
}

mongoose.connection.on("disconnected", () => {
	console.log("MongoDB esta desconectado")
}
)

app.listen(8800, () => {
	connect()
	console.log("Conectado al backend");
})


//Middleware
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/complejos", complejosRoute)
app.use("/api/productos", productosRoute)
app.use("/api/canchas", canchasRoute)

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500
	const errorMessage = err.message || "Algo esta mal"
	return res.status(500).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
})




