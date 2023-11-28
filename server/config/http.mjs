import app from "../config/express.mjs";
import { createServer } from 'http'; 

const server = createServer(app);

export default server;