let string = 'This is a test!';
const index = 2;
console.log(string);
let capString = string.toUpperCase();

let charArray = [];

for (i=0; i < capString.length; i++) {
    charArray.push(capString.charCodeAt(i));
}

const newArray = charArray.map(num => {
    if(num >=65 && num <= 90) {
      return String.fromCharCode(num + index);  
    } else {
        return String.fromCharCode(num);
    }
}
);

let newMessage = newArray.join('');

console.log(newMessage);





