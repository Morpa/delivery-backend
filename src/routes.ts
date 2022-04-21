import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreatClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createClient/CreatDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/authenticate/', authenticateClientController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);

export { routes };
