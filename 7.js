function greeting(name) {
    if(name === undefined) {
        name = 'john'
    }
    else 
        name = ''

    names = name || "John"; //the truty and falsy rule using or operator so it will get second or john
    console.log(name);
    console.log("Hello " + names);
}
// greeting("Johnson"); // alerts "Hi Johnson";
greeting(); //alerts "Hello John"