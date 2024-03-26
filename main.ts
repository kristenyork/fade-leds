input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P3, 0)
    led.plotBarGraph(
    4,
    4
    )
    for (let index = 0; index < 10; index++) {
        led.fadeIn(2000)
basic.pause(500)
        led.fadeOut(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    0,
    0
    )
    pins.digitalWritePin(DigitalPin.P3, 0)
})
