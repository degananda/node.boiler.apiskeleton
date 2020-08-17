import { AuthDTO } from '../dto/auth.request.dto';
import jwt from 'jsonwebtoken';
import fs from 'fs';
class AuthService {
    
    constructor(){

    }

    generateJwtToken() : AuthDTO{
        const fs = require('fs');
        const pkeycert = fs.readFileSync('./authKey/jwtRS256.key');
        const jwtToken = jwt.sign(
            { 
                username : 'default',
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, 
            pkeycert, 
            { algorithm: 'RS256' }
        )
        const validJwtToken : AuthDTO = new AuthDTO(jwtToken);
        return validJwtToken;
    }

    validateToken(token : AuthDTO) : boolean {
        let tokenStatus = false;
        const pkeycert = fs.readFileSync('./authKey/jwtRS256.key.pub');
        jwt.verify(String(token.jwtToken), pkeycert, { algorithms: ['RS256'] }, (err, decoded) => {
            if(err){
                tokenStatus = false;
            } else {
                tokenStatus = true;
            }
        });
        return tokenStatus;
    }

}

export const authService = new AuthService();