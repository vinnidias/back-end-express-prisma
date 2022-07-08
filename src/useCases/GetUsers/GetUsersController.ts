import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUsersUseCase";

class GetUserController {
    async handle(request: Request, response: Response) {
        const getUserUseCase = new GetUserUseCase();

        try {
            const result = await getUserUseCase.execute()
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).send(error)
        }
    }
}

export { GetUserController }