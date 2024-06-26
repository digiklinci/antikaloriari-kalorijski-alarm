function otkljucaj (brojKalorija: number) {
    aktiviran = 0
    // vreme deaktiviranje je duze ako je broj utrosenih kalorija veci
    for (let index = 0; index < vreme_deaktivacije; index++) {
        basic.pause(1000)
    }
    vreme_deaktivacije = 10
    aktiviran = 1
    basic.showIcon(IconNames.Yes)
}
function alarm () {
    if (aktiviran == 1) {
        for (let index = 0; index < 10; index++) {
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(100)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    kalorijskiPrag += 20
    basic.showNumber(kalorijskiPrag)
})
// aktiviranje
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    aktiviran = 1
})
// prijemnik
radio.onReceivedNumberDeprecated(function (primljeneKalorije) {
    if (primljeneKalorije >= kalorijskiPrag) {
        basic.showIcon(IconNames.Heart)
        otkljucaj(primljeneKalorije)
        // naplati antikalorimetru
        radio.sendNumber(primljeneKalorije - kalorijskiPrag)
    } else {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(0)
    }
})
// deaktiviranje
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    aktiviran = 0
    basic.showIcon(IconNames.No)
})
// menjanje praga kalorija
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    kalorijskiPrag += -10
    basic.showNumber(kalorijskiPrag)
})
let ubrzanje = 0
let aktiviran = 0
let vreme_deaktivacije = 0
let kalorijskiPrag = 0
basic.showIcon(IconNames.Duck)
radio.setGroup(0)
kalorijskiPrag = 100
vreme_deaktivacije = 10
basic.forever(function () {
    if (aktiviran == 1) {
        ubrzanje = input.acceleration(Dimension.Strength) - 1023
        // okidač
        if (ubrzanje > 10) {
            alarm()
        }
    }
})
