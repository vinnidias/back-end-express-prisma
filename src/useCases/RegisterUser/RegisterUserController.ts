import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

class RegisterUserController {
    async handle(request: Request, response: Response){
        const { email, password } = request.body

        const registerUserUseCase = new RegisterUserUseCase()

        try {
            const result = await registerUserUseCase.execute({email, password})
            return response.status(201).json(result)
        } catch (error) {
            return response.status(400).send(error)
        }
    }
};

export { RegisterUserController }