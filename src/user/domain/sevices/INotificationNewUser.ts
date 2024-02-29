import { User } from "../entity/User";

export default interface INotificationNewClient{
    sendNotification(user: User):Promise<boolean>;
}