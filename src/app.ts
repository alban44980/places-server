import express from 'express';
import config from "config";
import logger from "./utils/logger";



const port = config.get<number>('port');
const app = express();


app.listen(port, ()=>{
  logger.info(`server is running at http://localhost:${port}`);
});