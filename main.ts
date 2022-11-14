// stay button
input.onButtonPressed(Button.A, function () {
    radio.sendString("stay")
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stay") {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "away") {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
// away button
input.onButtonPressed(Button.B, function () {
    radio.sendString("away")
    basic.clearScreen()
    basic.showIcon(IconNames.No)
})
radio.setGroup(1)
let alarm = music.createSoundEffect(
WaveShape.Square,
5000,
3662,
255,
220,
5000,
SoundExpressionEffect.None,
InterpolationCurve.Linear
)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 30) {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        5000,
        3662,
        255,
        220,
        5000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    } else if (false) {
    	
    }
})
