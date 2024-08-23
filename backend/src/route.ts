import express from "express";
import { helloWorldRouter } from "./controller/testing";

const router = express.Router();
router.use("/helloworld", helloWorldRouter);
// router.use('/login', logins);
export default router;
