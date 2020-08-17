import { UserDTO } from '../dto/user.request.dto';
export interface UserServiceInterface {
    /**
     * 
     * user microservice interface
     */
    retrieveUserList() : Array<UserDTO>;

}