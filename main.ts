input.onGesture(Gesture.FreeFall, function () {
    count += 1
    basic.showNumber(count)
})
let count = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
count = 0
