import express from 'express';
import UserController from '../controllers/usersController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';
import upload from '../middlewares/uploadMiddleare';

const routesUser = express.Router();

routesUser.get('/users', UserController.findUsers);
routesUser.get('/users/auth', authMiddleware, UserController.userAuthenticator)
routesUser.get('/users/auth/admin', authMiddleware, roleMiddleware('adm'), (req, res)=>{
    res.json({message: "Você é um admin"})
})
routesUser.post('/users/register', UserController.userRegister)
routesUser.post('/users/auth/login', UserController.userLogin)
routesUser.put('/users/:id/imagem', upload.single("imagem"), UserController.imageUpdate)

export default routesUser;