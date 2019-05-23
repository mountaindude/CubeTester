const cubeTester = require('../CubeTester.js');

exports.command = 'test <infile>';
exports.desc = 'Run tests from test input file';

exports.handler = function(argv) {
    cubeTester(argv);        
    //process.exit(1);
        
};