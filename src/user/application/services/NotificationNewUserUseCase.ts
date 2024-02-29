import { User } from "../../domain/entity/User";
import { NotificationNewClient } from "../../infrastructure/servicesRabbitMQ/NotificationNewClient";

export class NotificationNewClientUseCase {
  constructor(readonly serviceNotifiacion: NotificationNewClient) {}

  async run(user: User) {
    await this.serviceNotifiacion.sendNotification(user);
  }
}