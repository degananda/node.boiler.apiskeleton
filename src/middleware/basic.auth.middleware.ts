import { Request , Response, NextFunction } from 'express';
import { NODE_ENVIRONMENT, BASIC_AUTH, STATUS_CODE, DESCRIPTION } from './../constants/config.json';
import { Responses } from './../dto/response.dto';
import basicauth from 'express-basic-auth';

class BasicAuthMiddleware {

    private basicAuthOption = {
        users: { 'admin' : BASIC_AUTH.password },
        unauthorizedResponse : (req : Request) => {
            return new Responses(STATUS_CODE.UNAUTHORIZED, String(req.headers.transactionid),DESCRIPTION.UNAUTHORIZED);
        }
    };
    public basicAuth = (req : Request, res : Response, next : NextFunction) => {
        next();
    }
    public basicAuthLogin = (new basicauth(this.basicAuthOption));

}

export const basicAuthMiddleware = new BasicAuthMiddleware();