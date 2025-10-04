console.log("Good morning");

process.nextTick(() => {
    console.log("Good evening");
});

setImmediate(() => {
    console.log("Good night");
});

console.log("Good afternoon");
