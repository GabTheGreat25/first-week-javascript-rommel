function add(a, b) {
    return a + b;
}

c = add(1, 2);
console.log(c);

var add = function (a, b) {
    return a + b;
}
c = add(1, 2);
console.log(c);

// function changeCase(val) {
//     return val.toUpperCase();
// }

const changeCase = val => val.toUpperCase(); //using arrow function

function demofunc(a, passfunction) {
    console.log(passfunction(a));
}
 
demofunc("smallcase", changeCase);