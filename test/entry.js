let lib = require('./dep');
const fs = require('fs');
const path = require('path');
fs.watch(path.join(__dirname, 'dep.js'), { encoding: 'utf-8' }, (eventType, filename) => {
    if (filename) {
        console.log(filename);
        console.log(eventType);
    }
    delete require.cache[require.resolve('./dep.js')];
    lib = require('./dep');
    console.log(lib.getName());
    // console.log(`Now the age is ${dep.age}`);
    // console.log(require.cache[require.resolve(__dirname + '/dep.js')].exports);
});
