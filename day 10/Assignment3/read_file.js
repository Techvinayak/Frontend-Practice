const f = require('fs');
f.readFile("new_sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("error occured")
    }
    else
        console.log(data);
})
//f.close('new_sample.txt');