import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/useCase/CreateUserUseCase";
import dotenv from "dotenv";

export class CreateClientController {
    constructor(readonly createUserUseCase: CreateUserUseCase) {}

    async run(req: Request, res: Response){
        const data = req.body;
        
        try {
            const client = await this.createUserUseCase.run(
                data.userName,
                data.password
            );

            if(client){
                res.status(201).send({
                    status: "success",
                    data: {
                        id: client?.id,
                        userName: client?.userName,
                        password: client?.password
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: "Cliente no agregado"
                });
            }
        } catch(error){
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}