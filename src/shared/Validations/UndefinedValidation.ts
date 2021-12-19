/**
 * 
 * @param data data from user
 * @returns boolean. Whether the data entered by user is undefined or not.
 */
export function undefinedValidation(data: string): boolean {
    if (!data) {
        return false;
    }
    return true;
}