import {Router, Request, Response} from "express";
import client from "../database/prisma";
import { RegisterUserController } from "../useCases/RegisterUser/RegisterUserController";
import { GetUserController } from "../useCases/GetUsers/GetUsersController";

const router = Router()

const registerUserController = new RegisterUserController()
const getUserController = new GetUserController()

router.post("/register", registerUserController.handle)

router.get("", getUserController.handle)

export default router;