let a = ["Lion", "Tiger", "Cheetah", "Lepoard"];
let key = parseInt(prompt("Enter case no.: "));
switch (key) {
    case 1:
        a.unshift("jaguar");
        console.log(a);
        break;
    case 2:
        a.pop();
        console.log(a);
        break;
    case 3:
        a.push("wolf");
        console.log(a);
        break;
    case 4:
        a.shift();
        console.log(a);
        break;
    case 5:
        a.splice(2, 3);
        console.log(a);
        break;
    default:
        console.log("Invalid case no.");
        break;
}