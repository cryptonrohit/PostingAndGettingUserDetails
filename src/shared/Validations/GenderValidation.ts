import { genders } from "../Constants";

/**
 * 
 * @param data gender of the user
 * @returns boolean. Whether it a valid gender entry or not i.e, either of male/female/transgender
 */
export function genderValidation(data: string): boolean {
    if (!data) {
        return false;
    }
    const reqGender = data.toLowerCase();
    return genders.includes(reqGender) ? true : false;
}
