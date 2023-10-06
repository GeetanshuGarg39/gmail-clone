import  express  from "express";
import { saveSentEmail,getEmails } from "../controller/email-controller.js";


const router = express.Router();


router.post("/save",saveSentEmail);
router.get("/emails/:type",getEmails)

export default router;