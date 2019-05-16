// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // const answer = [];

    // str.map(function(letter,index){
    //     answer[str.index] = letter;

    // })

    //use of javascript reverse
    // return str.split('').reverse().join('')

    // let reversed = '';
    // //this is es2015 syntax for for loops
    // for (let character of str){
    //     reversed = character + reversed;
    // }

// return reversed;
    //take an array and condense it down to a single element
    return str.split('').reduce((reversed,character)=>{
        return character + reversed;

    }, '')
}

module.exports = reverse;
