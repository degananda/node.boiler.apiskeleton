import express, { Router } from 'express';
import { userController } from './../controller/user.controller';
import{ routes } from './../constants/routes.json';

class UserRoute {
    public router : Router;

    constructor(){
        this.router = express.Router();
        this.routes(); // initialize routes.
    }

    private routes() : void {
        this.router.route(routes.USER_RETRIEVE).get(userController.retrieveUserList);
    }

}

export const userRoute = new UserRoute().router;