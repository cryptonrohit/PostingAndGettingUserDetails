import { protocols } from "../Constants";
/**
 * 
 * @param data image url sent by user
 * @returns boolean. Whether the image url is valid or not.
 */
export function URLValidation(data: string): boolean {
    if (!data) {
        return false;
    }
    const urldata = new URL(data);
    return protocols.includes(urldata.protocol) ? true : false;
}
