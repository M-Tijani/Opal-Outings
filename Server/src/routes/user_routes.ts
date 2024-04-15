import express = require("express");
const router = express.Router();
const API_VERSION = "v1";

// CONTROLLER
import { Ceateuser } from "../controllers/Createuser";
import { Loginuser } from "../controllers/Loginuser";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post(`/${API_VERSION}/signup`, Ceateuser);
router.post(`/${API_VERSION}/signin`, Loginuser);

export default router;
