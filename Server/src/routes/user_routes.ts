import express = require("express");
const router = express.Router();
const API_VERSION = "v1";

// CONTROLLER
import { Ceateuser } from "../controllers/Createuser";
import { Loginuser } from "../controllers/Loginuser";
import { Updateuser } from "../controllers/Updateuse";
import { Deleteuser } from "../controllers/Deleteuser";
// AUTHRIZATION
import { checkAuth } from "../middleware/checkauth";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post(`/${API_VERSION}/signup`, Ceateuser);
router.post(`/${API_VERSION}/signin`, Loginuser);
router.patch(`/${API_VERSION}/updateuser`, Updateuser);
router.delete(`/${API_VERSION}/deleteuser`, checkAuth, Deleteuser);
export default router;
