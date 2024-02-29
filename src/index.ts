import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Signale } from 'signale';
import helmet from 'helmet';
import * as dotenv from "dotenv";
dotenv.config();
import { clientRouter } from './user/infrastructure/route/UserRouter';


const port: string | undefined = process.env.PORT;
const app = express();
const sigoptions = {
    secrets: ["([0-9]{4}-?)+"]
}
const signale = new Signale(sigoptions);

app.use(cors());
app.use(helmet.hidePoweredBy())
app.use(express.json());
app.use(morgan("dev"));

app.use("/user", clientRouter);

app.listen(port, ()=>{
    signale.success("server running in port: "+port)
})