let adim = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) <= 1500) {
        adim += 1
        basic.showNumber(adim)
    }
})
