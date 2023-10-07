import  express  from "express";
import { saveSentEmail,getEmails,moveEmailsToBin,toggleStarredEmails } from "../controller/email-controller.js";


const router = express.Router();


router.post("/save",saveSentEmail);
router.get("/emails/:type",getEmails);
router.post('/save-draft',saveSentEmail);
router.post('/bin',moveEmailsToBin);
router.post('/starred',toggleStarredEmails);

export default router;