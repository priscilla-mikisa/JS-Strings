//Quastion1
let a = "extravaganza";
let last = a.slice(8,12);
console.log(last);
//Question2
const food = "The quick fox jumped over the lazy dog";
let word = `eat`;
const v = "The ${word} quick for jumped over the lazy dog.";
console.log(v);
//Number 3
const story = "The quick brown fox jumps over the lazy dog";
let c = story.match("the");
console.log(c)
let d = story.match("brown");
console.log(d)

//Number4
const string1 ="The pupils are reading in the library";
let e = string1.includes("are");
console.log(e)

const string2 = "The child was sitting on the table before it fell";
let f = string2.includes("sitting");
console.log(f);

//Number 5
let g = "wonderful"
let newg= g.toUpperCase();
console.log(g);

let m = "amazing"
let newm = m.toLowerCase();
console.log(m);

function titleCase(str){
    str=str.toLowerCase().split("");
    for (let i=0; i<str.length; i++){

    }
    return str.join("");
}
   console.log(titleCase("A wonderful world"));



