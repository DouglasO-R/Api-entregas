import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";


const routes = Router();

const createController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();


routes.post("/clients/", createController.handle);
routes.post("/authenticate/", authenticateClientController.handle);

export { routes }