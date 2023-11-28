import mongoose from "mongoose";

const conn = (url) => 
  mongoose.connect(url).then(() => console.log('--> Database connected'));

export default conn;
