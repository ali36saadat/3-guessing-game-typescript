const btnPlayerNumber1 = document.querySelector(".readyP1") as HTMLButtonElement
const btnPlayerNumber2 = document.querySelector(".readyP2") as HTMLButtonElement
const btnPlayer1Check = document.querySelector(".checkP1") as HTMLButtonElement
const btnPlayer2Check = document.querySelector(".checkP2") as HTMLButtonElement
const inputPlayer1 = document.querySelector(
   ".input-player1"
) as HTMLInputElement
const inputPlayer2 = document.querySelector(
   ".input-player2"
) as HTMLInputElement
const btnPlayerCheck1 = document.querySelector("checkP1") as HTMLButtonElement
const btnPlayerCheck2 = document.querySelector("checkP2") as HTMLButtonElement
const btnAgain = document.querySelector(".again") as HTMLButtonElement

let readyPlayer: Array<any> = [false, false],
   secretNumberPlayer: Array<any> = [,],
   activePlayer: number = 1,
   secretNumber: number

const checkReady = function (num: number, secretNum: number): boolean {
   if (checkRangeNumber(secretNum)) {
      readyPlayer[num] = true
      secretNumberPlayer[num] = secretNum
      if ((readyPlayer[1] == readyPlayer[2]) == true) {
         document
            .querySelector(`.message-Player${num === 1 ? 2 : 1}`)!
            .classList.add("hidden")
         initialSettings()

         return false
      } else {
         document
            .querySelector(`.message-Player${num === 1 ? 2 : 1}`)!
            .classList.remove("hidden")
         document.querySelector(
            `.message-Player${num}`
         )!.textContent = `Player ${num} Is READY`
         return true
      }
   } else {
      return false
   }
}

btnPlayerNumber1.addEventListener("click", function () {
   if (
      checkReady(
         1,
         Number(
            (document.querySelector(".input-player1") as HTMLInputElement)!
               .value
         )
      )
   ) {
      inputPlayer1.classList.add("hidden")
      btnPlayerNumber1.classList.add("hidden")
   }
})

btnPlayerNumber2.addEventListener("click", function () {
   if (
      checkReady(
         2,
         Number(
            (document.querySelector(".input-player2") as HTMLInputElement)!
               .value
         )
      )
   ) {
      inputPlayer2.classList.add("hidden")
      btnPlayerNumber2.classList.add("hidden")
   }
})

const initialSettings = function (): void {
   btnPlayerNumber1.classList.add("hidden")
   btnPlayerNumber2.classList.add("hidden")
   inputPlayer2.classList.add("hidden")
   btnPlayer1Check.classList.remove("hidden")
   inputPlayer1.classList.remove("hidden")
   ;(inputPlayer2 as HTMLInputElement).value = ""
   ;(inputPlayer1 as HTMLInputElement).value = ""
   message(2, `Waiting...`)
}

const message = function (num: number, textMessage: string): void {
   document
      .querySelector<HTMLDivElement>(`.message-Player${num}`)!
      .classList.remove("hidden")
   document.querySelector<HTMLDivElement>(
      `.message-Player${num}`
   )!.textContent = textMessage
}

const checkSecretNumber = function (): void {
   if (secretNumber == secretNumberPlayer[activePlayer == 1 ? 2 : 1]) {
      showWinner()
   } else {
      message(activePlayer, displayMessage())
      changePlayer()
   }
}

btnPlayer1Check.addEventListener("click", function () {
   secretNumber = Number((inputPlayer1 as HTMLInputElement).value)
   if (checkRangeNumber(secretNumber)) {
      checkSecretNumber()
   }
})

btnPlayer2Check.addEventListener("click", function () {
   secretNumber = Number((inputPlayer2 as HTMLInputElement).value)
   if (checkRangeNumber(secretNumber)) {
      checkSecretNumber()
   }
})

const checkRangeNumber = function (num: number): boolean {
   return 0 < num && num <= 64 ? true : false
}

const displayMessage = function () {
   if (
      Number(secretNumber) >
      Number(secretNumberPlayer[activePlayer == 1 ? 2 : 1])
   ) {
      return `Too High 😧`
   } else {
      return `Too Low 😢`
   }
}

const changePlayer = function () {
   document
      .querySelector(`.input-player${activePlayer}`)!
      .classList.add("hidden")
   document.querySelector(`.checkP${activePlayer}`)!.classList.add("hidden")
   activePlayer = activePlayer == 1 ? 2 : 1
   document
      .querySelector(`.input-player${activePlayer}`)!
      .classList.remove("hidden")
   document.querySelector(`.checkP${activePlayer}`)!.classList.remove("hidden")
   document
      .querySelector(`.message-Player${activePlayer}`)!
      .classList.add("hidden")
   ;(
      document.querySelector(`.input-player${activePlayer}`) as HTMLInputElement
   ).value = ""
}

const showWinner = function () {
   document.querySelector(`.input-player1`)!.classList.add("hidden")
   document.querySelector(`.input-player2`)!.classList.add("hidden")
   document.querySelector(`.checkP1`)!.classList.add("hidden")
   document.querySelector(`.checkP2`)!.classList.add("hidden")
   document.querySelector(`.message-Player1`)!.classList.add("hidden")
   document.querySelector(`.message-Player2`)!.classList.add("hidden")
   document.querySelector(`.middleLine`)!.classList.add("hidden")
   document.querySelector(".show-winner")!.classList.remove("hidden")
   document.querySelector(
      ".show-winner"
   )!.textContent = `Player ${activePlayer} Wins`
   if (secretNumberPlayer[1]) {
      document.querySelector(".player1")!.textContent = secretNumberPlayer[1]
   }
   if (secretNumberPlayer[2]) {
      document.querySelector(".player2")!.textContent = secretNumberPlayer[2]
   }
   document.querySelector("body")!.style.backgroundColor = "#60b347"
}

btnAgain.addEventListener("click", function () {
   document
      .querySelector<HTMLInputElement>(`.input-player1`)!
      .classList.remove("hidden")
   document
      .querySelector<HTMLInputElement>(`.input-player2`)!
      .classList.remove("hidden")
   document.querySelector<HTMLDivElement>(`.checkP1`)!.classList.add("hidden")
   document.querySelector<HTMLDivElement>(`.checkP2`)!.classList.add("hidden")
   document
      .querySelector<HTMLDivElement>(`.message-Player1`)!
      .classList.add("hidden")
   document
      .querySelector<HTMLDivElement>(`.message-Player2`)!
      .classList.add("hidden")
   btnPlayerNumber1.classList.remove("hidden")
   btnPlayerNumber2.classList.remove("hidden")
   document
      .querySelector<HTMLDivElement>(`.middleLine`)!
      .classList.remove("hidden")
   document
      .querySelector<HTMLDivElement>(".show-winner")!
      .classList.add("hidden")
   document.querySelector<HTMLBodyElement>("body")!.style.backgroundColor =
      "#222222"
   document.querySelector<HTMLInputElement>(`.input-player1`)!.value = ""
   document.querySelector<HTMLInputElement>(`.input-player2`)!.value = ""
   document.querySelector<HTMLDivElement>(".player1")!.textContent = "P1"
   document.querySelector<HTMLDivElement>(".player2")!.textContent = "P2"
   readyPlayer = [false, false]
   secretNumberPlayer = [,]
   activePlayer = 1
})

document
   .querySelector<HTMLButtonElement>(".back")!
   .addEventListener("click", function () {
      window.location.href = "../index.html"
   })
