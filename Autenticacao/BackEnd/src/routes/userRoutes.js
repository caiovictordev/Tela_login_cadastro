import express from 'express';
import UserController from '../controllers/usersController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';

const routesUser = express.Router();

routesUser.get('/users', UserController.findUsers);
routesUser.post('/users/register', UserController.userRegister)
routesUser.post('/users/auth/login', UserController.userLogin)
routesUser.get('/users/auth/admin', authMiddleware, roleMiddleware('adm'), (req, res)=>{
    res.json({message: "Você é um admin"})
})
routesUser.get('/users/auth', authMiddleware, UserController.userAuthenticator)

export default routesUser;