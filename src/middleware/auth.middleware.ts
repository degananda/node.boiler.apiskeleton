import { STATUS_CODE } from './../constants/config.json'
import { Request, Response, NextFunction } from 'express';
import { Responses } from './../dto/response.dto';
class AuthMiddleware {

    public jwtAuth = (req : Request ,res : Response, next : NextFunction  )=>{
        if(typeof req.headers.authorization !== "undefined"){
            //let responses : Responses = {}
            next();
        } else {
            next();
        }
    }

}
export const authMiddleware = new AuthMiddleware();