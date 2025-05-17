require("dotenv").config();

console.log("URI:", process.env.MONGODB_URI);

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose
	.connect(uri)
	.then(() => {
		console.log("✅ Połączono z MongoDB Atlas");
		process.exit(); // zakończ program po udanym połączeniu
	})
	.catch((err) => {
		console.error("❌ Błąd połączenia z MongoDB:", err);
		process.exit(1);
	});
