import { Router} from "express";
import UserController from "../controller/UserController";

const userController = new UserController()

const userRoutes = Router();

userRoutes.post("/users", userController.save)

userRoutes.get("/users/:uuid", userController.findById)

userRoutes.get("/users", userController.findAll)

export default userRoutes;