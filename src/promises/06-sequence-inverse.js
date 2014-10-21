var Q = require('q');
var fs = require('fs');
var logError = require('../helpers/error-helper').logError;
Q.longStackSupport = true;

process.on('uncaughtException', function (err) {
    throw err;
});

function printNumber(config){
    return new Q.Promise(function (resolve, reject, notify){
        config.number = config.number - 1;
        config.delay = config.delay - 200;
        setTimeout(function() {
            console.log(config.number, ' : ', config.delay, 'ms')
            resolve(config);
        }, config.delay);
    })
}

module.exports = function() {  debugger;

    console.log('Inverse Sequence, first slower');
    printNumber({
        number: 4,
        delay: 800
    })
    .then(printNumber)
    .then(printNumber)
    .then(printNumber)

};