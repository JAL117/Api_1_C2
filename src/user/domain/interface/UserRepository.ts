import { User } from "../entity/User";

export interface UserRepository {
    createUser(
        userName: string,
        password: string
    ): Promise<User | null>;
}