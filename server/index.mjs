import "./config/env.mjs";
import conn from "./config/conn.mjs";
import server from "./config/http.mjs";


const port = async () => {
  await conn(process.env.ATLAS_URI);

  server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

port();








// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });