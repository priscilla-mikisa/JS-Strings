//Extract the last four characters from the string below;"extravaganza"
let str1 = "extravaganza";
let extract = str1.substring(8);
console.log({extract});

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const str2="The quick fox jumped over the lazy dog.";
let word = "eat";
let newstr = `The ${word}quick fox jumped over the lazy dog.`;
console.log({newstr});

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
let str3= "The quick brown fox jumps over the lazy dog.";
let a = (str3.match(/the/gi).length);
let b = (str3.match(/brown/gi).length);
console.log({a});
console.log({b});
//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const str4 = "The pupils are reading in the library.";
const find = str4.search("are");
console.log({find});

const str5 = "The child was sitting n the tble before it fell.";
const find5 = str5.search("sitting");
console.log({find5});

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let str6 = "wonderful";
let turn = str6.toUpperCase();
console.log({turn});

let str7 = "amazing";
let turn2 = str7.toUpperCase().toLowerCase();
console.log({turn2});

let str8 = "UndERneath";
let turn3 = str8.toLowerCase();
console.log({turn3});

function titleCase(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("A wonderful world"));




