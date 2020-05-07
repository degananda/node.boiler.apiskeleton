import { Request, Response } from 'express';
import { authService } from './../services/auth.services';
class AuthController {

    public generateToken = async (req : Request, res : Response) => {
        const jwtToken = authService.generateJwtToken();
        res.status(200).json(jwtToken);
    };

}

export const authController = new AuthController();