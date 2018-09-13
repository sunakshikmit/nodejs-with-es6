import express from "express";
import connectToDb from "./configs/db";
import expressFile from './configs/express';
import router  from './routes/index';
const app = express();
// require('./configs/env/development.json')
let env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");

global.config = require("./configs/env/development");

// call db file
connectToDb(config);
// call main press file 
expressFile(app);
// call route file 
router(app);

app.listen(config.port, () => {
  console.log("server started - ", config.port);
});
