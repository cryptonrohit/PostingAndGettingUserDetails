/**
 * 
 * @param data date of birth of the user
 * 1. (?:(?:19|20)[0-9]{2} - any year between 1900 - 2099.
 * 2. (0?[1-9]|1[012]) - any month from 01-12. If first digit is 0 then second digit can be between 1-9. 
 *     If first digit is 1 then second digit should be either of 0 or 1 or 2.
 * 3. (0?[1-9]|[12][0-9]|3[01] - any day from 01-31. 
 *     If first digit is 0 then second digit can be between 1-9. 
 *     If first digit is 1 then second digit can be between 1-9. 
 *     If first digit is 2 then second digit can be between 1-9.
 *     If first digit is 3 then second digit can be either 0 or 1.
 * @returns boolean. Whether the date entered by the user is in format: YYYY/MM/DD or not.
 */
export function dateOfBirthValidation(data: string): boolean {
    const regex = /^(?:(?:19|20)[0-9]{2})\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/
    return data.match(regex) ? true : false;
}