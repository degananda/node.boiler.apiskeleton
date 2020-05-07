
import { Request, Response, response } from 'express';
import { userService } from './../services/user.service';
import { UserModel } from './../models/user.model';
import { HeaderEnrichmentModel } from './../models/header.enrichment.model';
import { UserListResponseDTO } from './../dto/user.list.response.dto';
import { STATUS_CODE, DESCRIPTION } from './../constants/config.json';
import { UserDTO } from './../dto/user.dto';

class UserController {

    public retrieveUserList = async (req : Request, res : Response) => {
        const userList : Array<UserDTO> = userService.retrieveUserList();
        const enrichment : HeaderEnrichmentModel = res.locals.enrichment;
        let response : UserListResponseDTO = new UserListResponseDTO(STATUS_CODE.SUCCESS,enrichment.transactionId, DESCRIPTION.SUCCESS, userList);
        res.json(response);
    }

}
export const userController = new UserController();