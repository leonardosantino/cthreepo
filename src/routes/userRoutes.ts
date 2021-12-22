import { Router} from "express";
import UserController from "../controller/UserController";

const userController = new UserController()

const userRoutes = Router();

userRoutes.post("/users", userController.save)
userRoutes.put("/users", userController.updateById)

userRoutes.get("/users/:uuid", userController.findById)
userRoutes.delete("/users/:uuid", userController.deleteById)

userRoutes.get("/users", userController.findAll)

export default userRoutes;