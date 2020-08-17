import { UserDTO } from './user.request.dto';
import { Responses } from './response.dto';

export class UserListResponseDTO extends Responses {
    
    public userList : Array<UserDTO> | null;

    constructor(statusCode : number, transactionId : string, description : string, userList : Array<UserDTO>){
        super(statusCode, transactionId, description);
        this.userList = userList;
    }

}