import { AuthDTO } from './../dto/auth.dto';
import { AuthResponseDTO } from './../dto/auth.response.dto';
import jwt from 'jsonwebtoken';
import fs from 'fs';
class AuthService {
    
    constructor(){

    }

    generateJwtToken(){
        const fs = require('fs');
        var pkeycert = fs.readFileSync('./authKey/private_key.pem');
        var jwtToken = jwt.sign(
            { 
                username : 'default',
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, 
            pkeycert, 
            { algorithm: 'RS256' }
        )
        return jwtToken;
    }

}

export const authService = new AuthService();