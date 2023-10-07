import  express  from "express";
import { saveSentEmail,getEmails,moveEmailsToBin } from "../controller/email-controller.js";


const router = express.Router();


router.post("/save",saveSentEmail);
router.get("/emails/:type",getEmails);
router.post('/save-draft',saveSentEmail);
router.post('/bin',moveEmailsToBin);

export default router;