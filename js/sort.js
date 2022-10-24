let vals = [
    {
        x: 2,
        y: 10
    },
    {
        x: 5,
        y: 6
    },
]
// sort is a function you need to write yourself
function compare (a, b) {
    return b.y - a.y
}

console.log(vals)
vals.sort(compare)
console.log(vals)

