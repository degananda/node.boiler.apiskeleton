export class AuthDTO {

    public jwtToken? : string;

    constructor(jwtToken : string){
        this.jwtToken = jwtToken;
    }

}