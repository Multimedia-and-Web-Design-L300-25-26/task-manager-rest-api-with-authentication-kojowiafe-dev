import mongoose from "mongoose";
import app from "../src/app.js";

await mongoose.connection.asPromise();
await mongoose.connection.collection("users").deleteMany({});
await mongoose.connection.collection("tasks").deleteMany({});