import { UserModel } from '../models/user.model';
export class UserDTO {
    
    public userId : number;
    public userName : string;
    public userCompleteName : string;
    public userEmail : string;

    constructor(user : UserModel){
        this.userId = user.userId;
        this.userName = user.userName;
        this.userCompleteName = `${user.userFirstName} ${user.userLastName}`;
        this.userEmail = user.userEmail;
    }

}