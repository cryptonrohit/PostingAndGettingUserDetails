export function stringValidation(strValue: string): boolean {
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