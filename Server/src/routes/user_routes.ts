import express = require("express");
const router = express.Router();
const API_VERSION = "v1";

// CONTROLLER
import { CreateUser } from "../controllers/Createuser";
import { Loginuser } from "../controllers/Loginuser";
import { Updateuser } from "../controllers/Updateuse";
import { Deleteuser } from "../controllers/Deleteuser";
import { Getuserinfo } from "../controllers/Getuserinfo";
// AUTHRIZATION
import { checkAuth } from "../middleware/checkauth";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post(`/${API_VERSION}/signup`, CreateUser);
router.post(`/${API_VERSION}/signin`, Loginuser);
router.patch(`/${API_VERSION}/updateuser`, checkAuth, Updateuser);
router.delete(`/${API_VERSION}/deleteuser`, checkAuth, Deleteuser);
router.post(`/${API_VERSION}/profile`, Getuserinfo);
export default router;
