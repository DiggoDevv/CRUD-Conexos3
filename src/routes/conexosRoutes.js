import express from "express";
import orderController from "../controller/orderController.js";
import employeeController from "../controller/employeeController.js";

const router = express.Router();

router.post("/order", orderController.create);
router.get("/order", orderController.getAll);
router.get("/order/:id", orderController.getById);
router.put("/order/:id", orderController.update);
router.delete("/order/:id", orderController.delete);


router.post("/auth", employeeController.login);
router.post("/user", employeeController.create);
router.get("/user/:id", employeeController.getById);
router.get("/user", employeeController.getall);

export default router;