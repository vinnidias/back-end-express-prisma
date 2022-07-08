import client from "../../database/prisma";

class GetUserUseCase {
    async execute() {
        try {
            const allUsers = await client.user.findMany({
                select: {
                    email: true,
                    id: true,
                    createdAt: true
                }
            });

            return allUsers
        } catch (error) {
            console.log(error)
        }
    }
}

export { GetUserUseCase }