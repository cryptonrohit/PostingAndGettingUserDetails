import { Operation } from "../Models/Operations";

export function getHttpStatusData(operation: Operation) {
    switch (operation) {
        case Operation.NoDataFound:
            return {statusCode: 404, outputData: "No data available"}; 
        case Operation.Success:
            return {statusCode: 200, outputData: "All good"};     
        case Operation.AlreadyExists:
            return {statusCode: 409, outputData: "AlreadyExists with same PAN number"};
        case Operation.Created:
            return {statusCode: 201, outputData: "Created"};
        case Operation.Error:
            return {statusCode: 500, outputData: "Internal Server Error"};       
        default:
            return {statusCode: 400, outputData: "Bad Request"};
    }
}
