import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/authenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreatClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createClient/CreatDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();

routes.post('/client/authenticate/', authenticateClientController.handle);
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);

routes.post('/delivery/', deliveryController.handle);

export { routes };
