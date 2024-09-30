const mongoose = require("mongoose");
require('dotenv').config();

// Desactivar strictQuery si no lo necesitas
mongoose.set('strictQuery', false);

const MongoDB = process.env.MONGO_URL;  // Asegúrate de que esté bien escrito

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDB);
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);  // Detener la aplicación si la conexión falla
    }
};

module.exports = connectDB;
