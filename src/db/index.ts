import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function createMongoConnection() {
  try {
    const connection = mongoose.connect(process.env.DATABASE || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);

    mongoose.connection.on("error", function () {
      console.log("Could not connect to MongoDB");
    });

    mongoose.connection.on("disconnected", function () {
      console.log("Lost MongoDB connection...");
    });
    mongoose.connection.on("connected", function () {
      console.log("Connection established to MongoDB");
    });

    mongoose.connection.on("reconnected", function () {
      console.log("Reconnected to MongoDB");
    });

    return connection;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export default createMongoConnection;
