import express from 'express';
import config from "config";



const port = config.get<number>('PORT');
const app = express();


app.listen(port, ()=>{
  console.log("server is running");
});