input.onButtonPressed(Button.A, function () {
    playerChoice += -1
})
function win () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
    alrGame = 0
    playGame()
}
function lose () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1500)
    basic.clearScreen()
    alrGame = 0
    playGame()
}
function playGame () {
    alrGame = 1
    playerChoice = 0
}
input.onButtonPressed(Button.B, function () {
    playerChoice += 1
})
function displayChoice () {
    if (playerChoice == 0) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    } else if (playerChoice == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . # # #
            . . . . .
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (alrGame == 1) {
        alrGame = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        displayChoice()
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # # .
            . . . . #
            . . # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        orgPlayerchc = playerChoice
        playerChoice = randint(0, 2)
        displayChoice()
        basic.pause(1000)
        if (orgPlayerchc == 0 && playerChoice == 1) {
            win()
        } else if (orgPlayerchc == 1 && playerChoice == 2) {
            win()
        } else if (orgPlayerchc == 2 && playerChoice == 0) {
            win()
        } else if (orgPlayerchc == 2 && playerChoice == 1) {
            lose()
        } else if (orgPlayerchc == 0 && playerChoice == 2) {
            lose()
        } else if (orgPlayerchc == 1 && playerChoice == 0) {
            lose()
        } else if (orgPlayerchc == playerChoice) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(1000)
            basic.clearScreen()
            alrGame = 0
            playGame()
        } else {
        	
        }
    }
})
let orgPlayerchc = 0
let playerChoice = 0
let alrGame = 0
basic.clearScreen()
alrGame = 0
playGame()
basic.forever(function () {
    if (alrGame == 1) {
        displayChoice()
    }
})
