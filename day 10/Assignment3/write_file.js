const f = require('fs');
f.writeFile('new_sample.txt', "Hello This side Vinayak ", (err) => {
    console.log(err);
});
