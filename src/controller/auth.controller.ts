import { Request, Response } from 'express';
import { authService } from './../services/auth.services';
import { AuthDTO } from '../dto/auth.request.dto';
import { AuthResponseDTO } from './../dto/auth.response.dto';
import { HeaderEnrichmentDTO } from './../dto/header.enrichment.dto';
import { STATUS_CODE, DESCRIPTION } from './../constants/config.json';
class AuthController {

    public generateToken = async (req : Request, res : Response) => {
        const jwtToken : AuthDTO = authService.generateJwtToken();
        const enrichment : HeaderEnrichmentDTO = res.locals.enrichment;
        const authResponseDTO : AuthResponseDTO = new AuthResponseDTO(STATUS_CODE.SUCCESS, enrichment.transactionId, DESCRIPTION.SUCCESS, jwtToken);
        res.status(STATUS_CODE.SUCCESS).json(authResponseDTO);
    };

}

export const authController = new AuthController();