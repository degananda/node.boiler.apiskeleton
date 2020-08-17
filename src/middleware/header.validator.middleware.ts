import { STATUS_CODE, DESCRIPTION } from './../constants/config.json'; 
import { Request, Response, NextFunction } from 'express';
import { Responses } from './../dto/response.dto';
import { HeaderEnrichmentDTO } from '../dto/header.enrichment.dto';
class HeaderValidatorMiddleware {

    public headerValidator = (req: Request, res : Response, next : NextFunction) => {
        // headers variable by default case lowercase
        if(typeof req.headers !== "undefined"){
            let enrichment : HeaderEnrichmentDTO;
            if(typeof req.headers.transactionid== "undefined"){
                var responses : Responses = new Responses(STATUS_CODE.BAD_REQUEST, '-1', DESCRIPTION.MISSING_TRANSACTION_ID);
                res.status(STATUS_CODE.BAD_REQUEST).json(responses);
            } else {
                // request enrichment from header validator middleware camelCase.
                enrichment = new HeaderEnrichmentDTO(String(req.headers.transactionid));
                res.locals.enrichment = enrichment;
                next();
            }
        } else {
            var responses : Responses = new Responses(STATUS_CODE.BAD_REQUEST, '-1', DESCRIPTION.BAD_REQUEST);
            res.status(STATUS_CODE.BAD_REQUEST).json(responses);
        }
    };

}

export const headerValidatorMiddleware = new HeaderValidatorMiddleware();