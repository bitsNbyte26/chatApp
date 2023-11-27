const mongoose = require("mongoose");
//const colors = require("colors");

//const url = process.env.MONGO_URI
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://saiyammishra26:B8s4Z23L0BdiF5be@cluster0.ouch7gs.mongodb.net/?retryWrites=true&w=majority' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
