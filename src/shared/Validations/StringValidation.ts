/**
 * 
 * @param data data from user
 * @returns boolean. Whether the data entered by user is valid string or not.
 */
export function stringValidation(strValue: string): boolean {
    if (!strValue) {
        return false;
    }
    if(typeof(strValue) !== "string"){
        return false;
    }
    for(let i=0; i < strValue.length; i++){
        if(strValue.charCodeAt(i) > 127){
            return false;
        }
    }
    return true;
}