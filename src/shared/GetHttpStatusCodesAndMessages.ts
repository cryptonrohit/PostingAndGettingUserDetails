import { Operation } from "../Models/Operations";

export function getHttpStatusCodeAndMessage(operation: Operation) {
    switch (operation) {
        case Operation.AlreadyExists:
            return {statusCode: 409, outputData: "AlreadyExists"};
        case Operation.Created:
            return {statusCode: 201, outputData: "Created"};
        case Operation.Error:
            return {statusCode: 500, outputData: "Internal Server Error"};       
        default:
            return {statusCode: 400, outputData: "Bad Request"};
    }
}
