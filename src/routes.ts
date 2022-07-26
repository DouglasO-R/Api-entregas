import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesByClientController } from "./modules/clients/useCases/FindAllDeliveriesByClients/FindAllDeliveriesByClientsController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/FindAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/UpdateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/UpdateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesByDeliverymanController } from "./modules/deliveryman/useCases/FindAllDeliveriesByDeliveryman/FindAllDeliveriesByDeliverymanController";


const routes = Router();

const createController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveries = new FindAllDeliveriesByClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllByDeliveryman = new FindAllDeliveriesByDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/clients/", createController.handle);
routes.post("/clients/authenticate/", authenticateClientController.handle);
routes.get("/clients/deliveries/", ensureAuthenticateClient,findAllDeliveries.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);
routes.post("/deliveryman/deliveries/",ensureAuthenticateDeliveryman, findAllByDeliveryman.handle);

routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)

export { routes }