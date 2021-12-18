import { panFourthCharInclusions } from "../Constants";

/**
 * 
 * @param data The Pan Number of the user
 * 1. It should be 10 in length
 * 2. The first 5 characters are always letters, then the next 4 characters are numbers and then last character is a letter.
 * 3. The fourth character should be either of these:
 *      C — Company
        P — Person
        H — Hindu Undivided Family (HUF)
        F — Firm
        A — Association of Persons (AOP)
        T — AOP (Trust)
        B — Body of Individuals (BOI)
        L — Local Authority
        J — Artificial Juridical Person
        G — Govt
 * @returns Boolean. Whether the PAN is valid or not.
 */
export function panNumberValidation(data: string): boolean {
    if (!data) {
        return false;
    }
    const firstFiveChars = data.substring(0,5);
    const secondFourChars = data.substring(5,9);
    const lastChar = data.substring(9);
    return validation(firstFiveChars, data.charAt(3), secondFourChars, lastChar);
}

function validation(firstFiveChars: string, fourthChar: string, secondFourChars: string, lastChar: string): boolean {
    if (!firstFiveCharValidation(firstFiveChars) 
    && !fourthCharValidation(fourthChar)
    && !secondFourCharValidation(secondFourChars)
    && !lastChar.match(/[a-zA-Z]/g)) {
        return false;
    }
    return true;
}

function firstFiveCharValidation(firstFiveChars: string): boolean {
    const regex = /[a-zA-Z]/g;
    let returnValue: boolean;
    for(let i=0; i<firstFiveChars.length; i++) {
        if(!(firstFiveChars.charAt(i).match(regex))) {
            return returnValue = false;
        }
        returnValue = true;
    }
    return returnValue;
}

function fourthCharValidation(fourthCharacter: string): boolean {
    return panFourthCharInclusions.includes(fourthCharacter) ? true : false;
}

function secondFourCharValidation(secondFourChars: string) {
    const regex = /[0-9]/g;
    let returnValue: boolean;
    for(let i=0; i<secondFourChars.length; i++) {
        if(!(secondFourChars.charAt(i).match(regex))) {
            return returnValue = false;
        }
        returnValue = true;
    }
    return returnValue;
}
