import moment from "moment";
/**
 * 
 * @param data date of birth of the user
 * @returns boolean. Whether the date entered by the user is in format: YYYY/MM/DD or not.
 */
export function dateOfBirthValidation(data: string): boolean {
    return moment(data, "YYYY/MM/DD", true).isValid() ? true : false;
}