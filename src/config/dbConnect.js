import mongoose from "mongoose"

mongoose.connect("mongodb+srv://thiagolinhares:<password>@cluster0.lqbtmrf.mongodb.net/bank-online");

let db = mongoose.connection;

export default db;