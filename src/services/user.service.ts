import { UserModel } from './../models/user.model';
import { UserDTO } from '../dto/user.request.dto';
import { UserServiceInterface } from './../interfaces/user.interface';
class UserService implements UserServiceInterface {

    constructor(){
    }

    retrieveUserList() : Array<UserDTO> {
        let userList : Array<UserDTO> = [];
        let currentUser : UserModel = new UserModel(1000, 'dega','dega','priyambada','degananda.ferdian@gmail.com',1);
        userList.push(new UserDTO(currentUser));
        return userList;
    }

}
export const userService = new UserService();