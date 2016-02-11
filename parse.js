var fs = require('fs');
var manager = require('./manager');

//if (!process.argv[2] || !process.argv[3]) {
//  console.log('npm . INPUT_FILE OUTPUT_FILE');
//  process.exit(0);
//}

var content = fs.readFileSync(process.argv[2]).toString();
var data = content.split('\n');

manager.start(data);
