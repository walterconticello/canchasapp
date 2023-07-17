import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Endpoint de autenticación");
})

router.get("/register", (req, res) => {
	res.send("Endpoint de registro");
})

export default router