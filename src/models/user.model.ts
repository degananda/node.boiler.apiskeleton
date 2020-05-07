export class UserModel {
    
    public userId : number;
    public userName : string;
    public userFirstName : string;
    public userLastName : string;
    public userEmail : string;
    public userRoleId : number;

    constructor(userId : number, userName : string, userFirstName : string, userLastName : string, userEmail : string, userRoleId : number){
        this.userId = userId;
        this.userName = userName;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmail = userEmail;
        this.userRoleId = userRoleId;
    }

}