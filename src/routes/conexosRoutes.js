import express from "express";
import conexosController from "../controller/conexosController.js";

const router = express.Router();

router.post("/order", conexosController.create);
router.get("/order", conexosController.getAll);
router.get("/order/:id", conexosController.getById);
router.put("/order/:id", conexosController.update);
router.delete("/order/:id", conexosController.delete);

export default router;