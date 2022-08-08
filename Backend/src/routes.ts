// Import das Rotas
import { Router } from 'express';
import multer from 'multer';
// Rotas User
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'
import { ListUserController } from './controllers/user/ListUserController'

// Rotas Controller
import { CreateControllerFab} from './controllers/controllerFab/CreateControllerFab'
import { GetControllerFab} from './controllers/controllerFab/GetControllerFab'
import { RemoveItemController} from './controllers/controllerFab/RemoveItemController'
import { FinishControllController } from './controllers/controllerFab/FinishControllController'
import { DetailControllController} from './controllers/controllerFab/DetailControllController'


// Rotas Autenticação
import { isAuthenticated } from './middlewares/isAuthenticated'
import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,  new DetailuserController().handle )
router.get('/users', isAuthenticated, new ListUserController().handle)

// ROTA CONTROLL FABRIAÇÃO
router.post('/controll', isAuthenticated, new CreateControllerFab().handle)
router.get('/controll', isAuthenticated, new GetControllerFab().handle)
router.delete('/delete', isAuthenticated, new RemoveItemController().handle)
router.put('/update', isAuthenticated, new FinishControllController().handle)
router.get('/detalhes', isAuthenticated, new DetailControllController().handle)

export { router }; 