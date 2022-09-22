function isAllowedToDrive(age) {
    if (age > 21) {
        return true;
    } else {
        return false;
    }
}
console.log(isAllowedToDrive(22));

function sayDay(day) {
    switch (day) {
        case 1: console.log("Sunday");
            break;
        case 2: console.log("Monday");
            break;
        default:
            console.log("We live in a binary world. Go to Pluto");
    }
}
sayDay(1); //Sunday
sayDay(3);