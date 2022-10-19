const username = prompt("Please, enter your username:")

setTimeout(function() {
  console.log(`;) Welcome to this number guessing game, ${username}. Pass through all 5 stages and get your cash price.`)
}, 1500)

setTimeout(function() {
  console.log(`Let's play, LEVEL 1.`)
}, 3500)

function genNumberAndGuess(max, min) {
  max++
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let guess = parseInt(prompt(`Guess a number from the range of ${min} to ${max}`))

  return { randomNumber, guess, max }
}

function runGame(guess, randomNumber, count) {
  for (let i = 0; i < 100; i++) {
    if (guess === randomNumber) {
      count++

      if (parseInt(count) === 5) {
        console.log(`You have come to the end of this game, you earned a total of ${count} points... and about your cash price? sope otilorrrr`)
        break
      }
      else {
        let level = count + 1
        console.log(`You Guessed right, you have ${count} point(s).`)
        console.log(`Up next, LEVEL ${level}`)
        return count
      }
    }
    else {
      guess = parseInt(prompt(`:( You guessed wrong, try again...`))
    }
  }
}

function guessNumber(range) {
  let { maximum, minimum, count } = range

  let { randomNumber, guess, max } = genNumberAndGuess(maximum, minimum)
  count = runGame(guess, randomNumber, count)


  let { randomNumber: random2, guess: guess2, max: max2 } = genNumberAndGuess(max, minimum)
  count = runGame(guess2, random2, count)


  let { randomNumber: random3, guess: guess3, max: max3 } = genNumberAndGuess(max2, minimum)
  count = runGame(guess3, random3, count)

  let { randomNumber: random4, guess: guess4, max: max4 } = genNumberAndGuess(max3, minimum)
  count = runGame(guess4, random4, count)

  let { randomNumber: random5, guess: guess5, max: max5 } = genNumberAndGuess(max4, minimum)
  count = runGame(guess5, random5, count)
}


setTimeout(() => {
  guessNumber({ maximum: 1, minimum: 1, count: 0 })
}, 5000)