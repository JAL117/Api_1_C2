import { query } from "../../../database/database";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/interface/UserRepository";

export class MySqlUserRepository implements UserRepository {
    async createUser(
        userName: string,
        password: string 
    ): Promise<User | null> {
        const sql = "INSERT INTO usuarios (userName, password) VALUES (?,?)";
        const params: any[] = [userName, password];

        try {
            const [result]: any = await query(sql, params);
            return new User(result.insertId,userName, password);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}