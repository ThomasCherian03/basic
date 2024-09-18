import express from "express";
import {inputDetail,getUsersByName} from "./controller.js";

const router = express.Router();

router.post("/input", inputDetail);

router.get("/:name", getUsersByName);

export default router;