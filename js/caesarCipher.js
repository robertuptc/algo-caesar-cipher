exports.caesarCipher = function (str, shiftFactor) {
    let splitStr = str.split('')
    let finalString = []

    for (let i = 0; i < str.length; i++) {

        let code = str[i].charCodeAt()
        let addToEnds = code + shiftFactor

        if (str[i] == ' ') {
            finalString.push(str[i])
        } else if (code >= 65 && code <= 90) {
            if (code + shiftFactor > 90) {
                finalString.push(String.fromCharCode(65 + addToEnds-91))
            } else if(code + shiftFactor < 65){
                finalString.push(String.fromCharCode(91 +((code - 65) + shiftFactor))) //work here
            }else {
                finalString.push(String.fromCharCode(code + shiftFactor ))
            }
        } else if (code >= 97 && code <= 122) {
            if (code + shiftFactor > 122) {
                finalString.push(String.fromCharCode(97 + addToEnds-123))
            } else if(code + shiftFactor < 97){
                finalString.push(String.fromCharCode(123 +((code - 97) + shiftFactor)))
            }else {
                finalString.push(String.fromCharCode(code + shiftFactor))
            }
        } else {
            finalString.push(str[i])
        }
    } return finalString.join('')
};
