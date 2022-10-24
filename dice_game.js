'use strict'

function rollDie () {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled: ${roll}`)
    return roll
}

function throwDice () {
    let dice = []
    dice.push(rollDie())
    dice.push(rollDie())
    dice.push(rollDie())
    dice.push(rollDie())
    dice.push(rollDie())
    dice.push(rollDie())
    return dice
}
// let dice = throwDice()

// let dice = [4, 4, 4, 4, 3, 3]
// let dice = [6, 6, 6, 6, 6, 6]
// let dice = [1, 2, 3, 4, 5, 6]
// let dice = [2, 5, 1, 5, 6, 5]
// let dice = [1, 2, 3, 4, 5, 6]
let dice = [1, 2, 3, 4, 5, 6]

// [[1, 0], [2, 0],[3, 0],[4, 0],[5, 6],[6, 0]]
// [[1, 1], [2, 1],[3, 1],[4, 1],[5, 1],[6, 1]]

function scoreDice (dice) {
    let score = 0
    const dice_map = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]])
    for (let i = 0; i < dice.length; i++) {
        // dice_map.set(1, 2) //[1, 2], [2, 0],[3, 0],[4, 0],[5, 0],[6, 0]
        dice_map.set(dice[i], dice_map.get(dice[i]) + 1)
    }
    console.log(dice_map.values()) //[Map Iterator] { 0, 0, 0, 0, 0, 6 }
    let dice_counts = Array.from(dice_map.values())
    console.log(dice_counts)
    // [0,0,0,0,0,6] 
    // [1,1,1,1,1,1]


    if (dice_counts.includes(6)) {
        score = checkSixtuple(dice_map, score)
    }
    if (dice_counts.includes(5)) {
        score += checkQuintuple(dice_map, score)
    }
    if (dice_counts.includes(4)) {
        score += checkQuadruple(dice_map, score)
    }
    if (dice_counts.includes(3)) {
        score += checkTriple(dice_map, score)
    }
    score = checkSingleFive(dice_map, score)
    score = checkSingleOne(dice_map, score)

    if (oneToSix(dice_map)) {
        score = 1000
    }

    console.log(`Given dice =[ ${dice} ]`)
    console.log(`Score = ${score}`)
    return score
}


function checkSixtuple (dice_map, score) {
    dice_map.forEach(function (value, key) {
        if (value == 6) {
            score = key * 800
        }
    })
    return score
}

function checkQuintuple (dice_map, score) {
    dice_map.forEach(function (value, key) {
        if (value == 5) {
            score = key * 400
        }
    })
    return score
}

function checkQuadruple (dice_map, score) {
    dice_map.forEach(function (value, key) {
        if (value == 4) {
            score = key * 200
        }
    })
    return score
}

function checkTriple (dice_map, score) { //[1:3, 2:3, 3:0..]
    dice_map.forEach(function (value, key) {
        if (value == 3) {
            score += key * 100
        }
    })
    return score
}

function checkSingleOne (dice_map, score) {
    dice_map.forEach(function (value, key) {
        if (key == 1) {
            score += (value * 100)
        }
    })
    return score
}

function checkSingleFive (dice_map, score) {
    dice_map.forEach(function (value, key) {
        if (key == 5) {
            score += (value * 50)
        }
    })
    return score
}

function oneToSix (dice_map) {
    var oneToSixFlag = Boolean("true")
    for (const value of dice_map.values()) {
        if (value != 1) {
            oneToSixFlag = false
        }
    }
    return oneToSixFlag
}


scoreDice(dice)
module.exports = scoreDice