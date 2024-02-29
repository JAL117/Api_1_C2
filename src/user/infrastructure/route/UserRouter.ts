import express from "express";

import { createClientController} from "../dependency/DependenciesUser";

export const clientRouter = express.Router();

clientRouter.post("/", createClientController.run.bind(createClientController));