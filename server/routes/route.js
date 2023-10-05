import  express  from "express";
import { saveSentEmail } from "../controller/email-controller.js";


const router = express.Router();


router.post("/save",saveSentEmail);

export default router;