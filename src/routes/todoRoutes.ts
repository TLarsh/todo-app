import { Router } from "express";
import { create, list, update, remove } from "../controllers/todoController";
import { authMiddleware } from "../middlewares/auth"

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", authMiddleware, list);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, remove);

export default router;
