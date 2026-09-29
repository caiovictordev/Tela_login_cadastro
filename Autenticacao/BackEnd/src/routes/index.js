import express from 'express';
import routesUser from './userRoutes';

const routes = (app)=>{
    app.route('/').get((req, res)=>{
        let message = 'Servidor em funcionamento!'
        res.status(200).send(message)
    })

    app.use(express.json(), routesUser)
}

export default routes;