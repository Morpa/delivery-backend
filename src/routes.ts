import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/authenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreatClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/FindAllAvailable/FindAllAvailableController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createClient/CreatDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

routes.post('/client/authenticate/', authenticateClientController.handle);
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);

routes.post('/delivery/', ensureAuthenticateClient, deliveryController.handle);
routes.get('/delivery/available/', ensureAuthenticateDeliveryman, findAllAvailableController.handle);

export { routes };
