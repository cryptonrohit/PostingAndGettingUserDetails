import moment from "moment";

export function dateOfBirthValidation(data: string): boolean {
    return moment(data, "YYYY/MM/DD", true).isValid() ? true : false;
}