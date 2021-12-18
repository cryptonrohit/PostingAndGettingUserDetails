import { GenderModel } from "./GenderModel";

export default class UserDataModel {
    constructor(
        public firstName: string,
        public panNumber: string,
        public dateOfBirth: Date,
        public gender: GenderModel,
        public email: string,
        public profileImage: string
    ) {}
}
