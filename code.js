function sumFunction(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

const jsc = require('jsverify');

const testSum =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(sumFunction(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });

jsc.assert(testSum); 

console.log('All tests passed!'); 