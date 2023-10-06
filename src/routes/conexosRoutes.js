import express from "express";
import conexosController from "../controller/conexosController.js";

const router = express.Router();

router.post("/conexos", conexosController.create);
router.get("/conexos", conexosController.getAll);
router.get("/conexos/:id", conexosController.getById);
router.put("/conexos/:id", conexosController.update);
router.delete("/conexos/:id", conexosController.delete);

export default router;