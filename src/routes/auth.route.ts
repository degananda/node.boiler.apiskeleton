
import express, { Router } from 'express';
import { routes } from './../constants/routes.json';
import { authController } from './../controller/auth.controller';
class AuthRoute {

    public router : Router;

    constructor(){
        this.router = express.Router();
        this.routes();
    }

    private routes(){
        this.router.route(routes.AUTH_LOGIN).get(authController.generateToken);
    }

}

export const authRoute = new AuthRoute().router;