import { UserDTO } from './../dto/user.dto';
export interface UserServiceInterface {
    /**
     * 
     * user microservice interface
     */
    retrieveUserList() : Array<UserDTO>;

}