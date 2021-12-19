
/**
 * 
 * @param data email id of the user
 * 1. [a-zA-Z0-9_\.] - string containing any characters from a-z or A-Z including . and including underscore
 * 2. @ - there should be @ sign
 * 3. [a-zA-Z_] - string containing any characters from a-z or A-Z including underscore(_)
 * 4. \. - there should be a dot after the string
 * 5. [a-zA-Z]{2,3} - string containing any characters from a-z or A-Z BUT there can be either 2 or 3 characters not more than that(eg: .in,.com)
 * @returns boolean. Whether email id is valid or not.
 */
export function emailValidation(data: string): boolean {
    const emailRegex = /^[a-zA-Z0-9_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/g;
    return data.match(emailRegex) ? true : false;
}