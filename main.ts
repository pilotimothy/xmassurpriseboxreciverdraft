enum RadioMessage {
    message1 = 49434,
    CueOpenbox = 43852,
    message2 = 1435,
    Message3 = 31126,
    Reset = 40993
}
radio.onReceivedMessage(RadioMessage.Reset, function () {
    control.reset()
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    strip.setBrightness(100000)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    OLED.clear()
    OLED.writeStringNewLine("Merry Christmas!!")
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(5000)
    pins.analogWritePin(AnalogPin.P2, 0)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    OLED.clear()
    servos.P1.setAngle(90)
    music.playTone(988, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
    OLED.writeStringNewLine("SURPRISE!")
})
let strip: neopixel.Strip = null
basic.showString("R")
OLED.init(128, 64)
radio.setGroup(1)
radio.setFrequencyBand(52)
OLED.writeStringNewLine("Radio Standby")
servos.P1.setAngle(170)
OLED.writeStringNewLine("Servo Standby")
strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
OLED.writeStringNewLine("RGB LED Standby")
pins.analogWritePin(AnalogPin.P2, 0)
OLED.writeStringNewLine("Motor (RELAY) Standby")
music.setVolume(255)
OLED.writeStringNewLine("Buzzer Standby")
OLED.writeStringNewLine("All Set.")
