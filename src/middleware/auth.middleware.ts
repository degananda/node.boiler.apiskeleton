import { STATUS_CODE, DESCRIPTION } from './../constants/config.json'
import { Request, Response, NextFunction } from 'express';
import { Responses } from './../dto/response.dto';
import { HeaderEnrichmentDTO } from '../dto/header.enrichment.dto';
import { AuthDTO } from '../dto/auth.request.dto';
import { authService } from './../services/auth.services';

class AuthMiddleware {

    public jwtAuth = (req : Request ,res : Response, next : NextFunction  )=>{
        const enrichment : HeaderEnrichmentDTO = res.locals.enrichment;
        if(typeof req.headers.authorization == "undefined" || req.headers.authorization.indexOf("Bearer") <= -1){
            let responses : Responses = new Responses(STATUS_CODE.BAD_REQUEST, enrichment.transactionId, DESCRIPTION.MISSING_AUTHORIZATION);
            res.status(STATUS_CODE.UNAUTHORIZED).json(responses);
        } else {
            const jwtToken = req.headers.authorization.split(' ')[1];
            const tokenDTO = new AuthDTO(jwtToken);
            const isValidToken = authService.validateToken(tokenDTO);
            if(isValidToken){
                next();
            } else {
                let responses : Responses = new Responses(STATUS_CODE.BAD_REQUEST, enrichment.transactionId, DESCRIPTION.WRONG_TOKEN);
                res.status(STATUS_CODE.UNAUTHORIZED).json(responses);
            }
        }
    }

}
export const authMiddleware = new AuthMiddleware();