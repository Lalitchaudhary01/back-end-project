import { Router } from "express";
import { ragisterUser } from "../controllers/user.controller";

const router = Router();

router.route("./ragister").post(ragisterUser);

export default router;
