import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";
import { NotificationNewClientUseCase } from "../services/NotificationNewUserUseCase";

export class CreateUserUseCase {
    constructor (readonly userReposiroty: UserRepository, 
        readonly sendNotification: NotificationNewClientUseCase) {}

    async run(
        userName: string,
        password: string
    ): Promise<User | null> {
       
        try {
            const client:any = await this.userReposiroty.createUser(
                userName,
                password
            );
            if (client) {
                this.sendNotification.run(client);   
            }
            return client;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}