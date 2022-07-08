import client from "../../database/prisma";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/AppError";

interface IUserRegister {
    email: string,
    password: string,
}

class RegisterUserUseCase{
    async  execute({email, password}: IUserRegister){
        const userAlreadyExist = await client.user.findFirst({
            where: {
                email
            }
        })
        if(userAlreadyExist){
            throw new AppError("user already exist!", 409)
        }
        const passwordHash = await hash(password, 10)
        const user = await client.user.create({
            data: {
                email,
                password: passwordHash,
            }, 
            select: {
                email: true,
                id: true,
                createdAt: true
            }
        })
        
        return user
    }
}

export { RegisterUserUseCase }