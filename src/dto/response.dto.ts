export class Responses {

    public statusCode? : number;
    public transactionId? : string;
    public description? : string;

    constructor(statusCode : number, transactionId : string, description : string){
        this.statusCode = statusCode;
        this.transactionId = transactionId;
        this.description = description;
    }

}