radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber >= 10) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.showIcon(IconNames.Duck)
radio.setGroup(0)
