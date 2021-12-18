import { Operation } from "./Operations";
import UserDataModel from "./UserDataRequestModel";

export interface GetUserDataResponseModel {
    data?: UserDataModel[];
    operation: Operation;
}
