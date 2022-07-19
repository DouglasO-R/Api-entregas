import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";


const routes = Router();

const createController = new CreateClientController();


routes.post("/clients/", createController.handle);

export { routes }