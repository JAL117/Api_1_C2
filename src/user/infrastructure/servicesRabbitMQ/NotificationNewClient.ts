import { User } from "../../domain/entity/User";
import INotificationNewClient from "../../domain/sevices/INotificationNewUser";
import amqplib from 'amqplib';

export class NotificationNewClient implements INotificationNewClient{
    private url: any;
    private exch: any;
    
    constructor() {
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }
    async sendNotification(user: User): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const channel = await conn.createChannel();
        const status = await channel.publish(this.exch,'12345',Buffer.from(JSON.stringify(user.id)))
        console.log(status);
        return status
    }
}