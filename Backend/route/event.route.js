import express from "express";
import { getEvent } from "../controller/event.controller.js";

const router=express.Router();

router.get("/",getEvent);

export default router;



