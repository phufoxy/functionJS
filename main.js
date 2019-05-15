var array2 = ["melon", "banana", "apple", "orange", "lemon"];

function makeAllWordUpper1(array) {
    new Promise(function (res, rej) {
        var array2 = array.map(x => {
            return x.toUpperCase();
        })
        res(array2);
    }).then(function (result) {
        return Promise.resolve(result);
    }).then(function (result) {
        console.log(result);
    })
}
makeAllWordUpper1(array2);
// console.log(makeAllWordUpper(array2));
