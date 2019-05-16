// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};

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

    console.log(charMap);

}

module.exports = maxChar;
