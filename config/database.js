// const mongoose = require("mongoose");
// require('dotenv').config();

// const MongoDB = process.env.MONGO_URL;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(MongoDB);  // Elimina las opciones de configuración obsoletas
//         console.log("MongoDB is connected");
//     } catch (err) {
//         console.error(`Error connecting to MongoDB: ${err.message}`);
//         process.exit(1);  // Detener la aplicación si la conexión falla
//     }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
require('dotenv').config();

const MongoDB = process.env.MONGO_URL;  // Asegúrate de que esté bien escrito

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Detener la aplicación si falla la conexión
    }
};

module.exports = connectDB;
