// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    //use of character map is great to solve different types of string related questions

    const charMap = {};

    let max = 0;
    let maxChar = '';

    for (let char of str){
        if (!charMap[char]) {
            //chars['H'] = 1
            //"H' within the object is equal to 1 {"H": 1}
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
        //same way - if first part is null, that is ok - then make it 1 
        // chars[char] = chars[char] + 1 || 1;
    }

    for (let char in charMap){
        if (charMap[char] > max){
            //remember that charMap[char] outputs the corresponding number with the letter in the object
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
