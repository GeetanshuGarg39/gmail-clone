import express from 'express';
import Connection  from "./database/db.js";
import dotenv from "dotenv";
import router from './routes/route.js';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('/',router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,() => console.log(`Server is started on Port ${PORT}`))
