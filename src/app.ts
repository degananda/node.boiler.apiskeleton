/**
 * NodeJS REST API Boiler Plate
 */
import express from 'express';
// module router
import { userRoute } from './routes/user.route';
import { authRoute } from './routes/auth.route';
// JSON body parser
import bodyparser from 'body-parser';
// global middleware
import { authMiddleware } from './middleware/auth.middleware';
import { headerValidatorMiddleware } from './middleware/header.validator.middleware';
// config
import { NODE_ENVIRONMENT } from './constants/config.json';

class App {

    public app : express.Application;
    private port : number;

    constructor(){
        this.app = express();
        this.port = NODE_ENVIRONMENT.PORT;
        // JSON body parser
        this.app.use(bodyparser.urlencoded({extended: true}));
        this.app.use(bodyparser.json());

        // middleware
        this.app.use(headerValidatorMiddleware.headerValidator)
        this.app.use(authMiddleware.jwtAuth);

        // router
        this.app.use(authRoute);
        this.app.use(userRoute);

        this.app.listen(3000, () =>{
            console.log(`application running... on port  ${this.port}`);
        });

    }

}   

export default new App();