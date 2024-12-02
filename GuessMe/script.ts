let secretNumber1: number = Math.trunc(Math.random() * 64) + 1
let score: number = 20
let highScore: number = 0

const displayMessage1 = function (message: string): void {
   document.querySelector(".message")!.textContent = message
}

document.querySelector(".check")!.addEventListener("click", function () {
   const guess = Number(
      (document.querySelector(".guess") as HTMLInputElement).value
   )

   if (score > 1) {
      if (!guess) {
         displayMessage1(`No Number 🤨`)
      } else if (guess === secretNumber1) {
         displayMessage1(`It's Correct 🥳`)
         document.querySelector(".number")!.textContent = String(secretNumber1)
         document.querySelector("body")!.style.backgroundColor = "#60b347"
         document.querySelector<HTMLDivElement>(".number")!.style.width =
            "30rem"

         if (score > highScore) {
            highScore = score
            document.querySelector(".highscore")!.textContent =
               String(highScore)
         }
      } else if (guess !== secretNumber1) {
         displayMessage1(guess > secretNumber1 ? "Too High 😧" : "Too Low 😢")
         score--
         document.querySelector(".score")!.textContent = String(score)
      }
   } else {
      document.querySelector(".score")!.textContent = "0"
      displayMessage1(`You Lose 😣`)
      document.querySelector<HTMLDivElement>(".number")!.textContent =
         String(secretNumber1)

      document.querySelector("body")!.style.backgroundColor = "#ed2939"
   }
})

document.querySelector(".again")!.addEventListener("click", function () {
   score = 20
   secretNumber1 = Math.trunc(Math.random() * 64) + 1
   document.querySelector(".score")!.textContent = String(score)
   displayMessage1(`Start guessing...🙂`)
   document.querySelector("body")!.style.backgroundColor = "#222222"
   document.querySelector<HTMLDivElement>(".number")!.style.width = "15rem"
   ;(document.querySelector(".guess") as HTMLInputElement).value = ""
   document.querySelector(".number")!.textContent = "?"
})

document
   .querySelector<HTMLButtonElement>(".back")!
   .addEventListener("click", function () {
      window.location.href = "../index.html"
   })
