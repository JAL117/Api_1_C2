import { CreateClientController } from "../controllers/CreateUserController";
import { CreateUserUseCase } from "../../application/useCase/CreateUserUseCase";

import { MySqlUserRepository } from "../repository/MySqlUserRepository";

import { NotificationNewClient } from "../servicesRabbitMQ/NotificationNewClient";
import { NotificationNewClientUseCase } from "../../application/services/NotificationNewUserUseCase";

export const mySqlUserRepository = new MySqlUserRepository();

export const notificationNewClient = new NotificationNewClient();
export const servicesNotification = new NotificationNewClient();
export const serviceNotificationUseCase = new NotificationNewClientUseCase(servicesNotification);

export const createUserUseCase = new CreateUserUseCase(mySqlUserRepository, serviceNotificationUseCase);


export const createClientController = new CreateClientController(createUserUseCase);

