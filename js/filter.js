// filter & map creates a new array with the callback function applied to each element in the array

// fill & sort acts on the original array

// let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// vals = vals.filter(x => !(x % 2))
// console.log(vals)

// let s = 'It was a dark and stormy night.'
// s = s.split(' ')
// s = s.filter(x => x.length > 3)
// console.log(s)

let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven (num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

vals.filter(isEven)
