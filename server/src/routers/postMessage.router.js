import { Router } from "express";

import { getPosts,createPost } from "../controllers/postMessage.controller.js";



const router = Router();

router.route("/").get(getPosts)
router.route("/create").post(createPost)


export default router;