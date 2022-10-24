// create a function of map that takes in an array and a callback function and returns a new array with the callback function applied to each element in the array
function map (arr, cb) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}
console.log(map(['hello', 'world', 'john'], capitalize))
