enum RadioMessage {
    message1 = 49434,
    CueOpenbox = 43852,
    message2 = 1435,
    Message3 = 31126,
    Reset = 40993
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Ver.:")
    basic.showNumber(SoftwareVer)
})
radio.onReceivedMessage(RadioMessage.Reset, function () {
    control.reset()
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    OLED.clear()
    pins.digitalWritePin(DigitalPin.P1, 0)
    OLED.writeStringNewLine("Merry Christmas!!")
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    OLED.clear()
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    servos.P1.setAngle(90)
    OLED.writeStringNewLine("SURPRISE!")
})
let SoftwareVer = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
SoftwareVer = 3.6
OLED.init(128, 64)
OLED.writeStringNewLine("Ver.Stage Standby")
radio.setGroup(1)
radio.setFrequencyBand(52)
OLED.writeStringNewLine("Radio Standby")
OLED.writeStringNewLine("RGB LED Standby")
servos.P1.setAngle(180)
OLED.writeStringNewLine("Servo Standby")
pins.digitalWritePin(DigitalPin.P2, 0)
OLED.writeStringNewLine("Motor (RELAY) Standby")
OLED.writeStringNewLine("Buzzer Standby")
OLED.writeStringNewLine("Ver.: ")
OLED.writeNumNewLine(SoftwareVer)
basic.showString("R")
