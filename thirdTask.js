const fs = require('fs');

const createStream = fs.createWriteStream('welcome.txt');
createStream.write('Hello Node');
createStream.end();

function readData(err, data) {
    console.log(data);
}

fs.readFile('welcome.txt', 'utf8', readData);