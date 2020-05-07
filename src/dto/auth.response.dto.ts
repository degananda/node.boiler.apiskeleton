import { Responses } from './response.dto';
import { AuthDTO } from './auth.dto';
export class AuthResponseDTO extends Responses {
    
    public accessToken? : string;

    constructor(statusCode : number, transactionId : string, description : string, authDTO : AuthDTO){
        super(statusCode, transactionId, description);
        this.accessToken = authDTO.jwtToken;
    }

}