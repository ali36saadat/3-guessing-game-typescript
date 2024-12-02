//VARIABLES
const yes: Element = document.querySelector(".yes")! as HTMLButtonElement
const no: Element = document.querySelector(".no")! as HTMLButtonElement
const start: Element = document.querySelector(".start")! as HTMLButtonElement
const left: Element = document.querySelector(".left")! as HTMLElement
const right: Element = document.querySelector(".right")! as HTMLElement
const down: Element = document.querySelector(".down")! as HTMLElement
const number: Element = document.querySelector(".number")! as HTMLDivElement
const sentence: Element = document.querySelector(".sentence")! as HTMLElement
let guessNumber: number = 0
let i: number = 5
const sentences: Array<any> = [
   "I am incredibly cool and intelligent 😋",
   "I am extremely awesome and clever 😏",
   "Am i god!?! 🤠 ",
   "One more time or what 😉",
   "So easy 😗",
]

//FUNCTIONS
const finalGuess = function (): never {
   left.classList.add("hidden")
   right.classList.add("hidden")
   number.textContent = String(guessNumber)
   sentence.classList.remove("hidden")
   sentence.textContent = sentences[Math.trunc(Math.random() * 5)]
   document.querySelector<HTMLDivElement>(".number")!.style.width = "30rem"
   document.querySelector("body")!.style.backgroundColor = "#60b347"

   throw Error()
}

const num2binary = function (digit: number): never {
   let str = ""
   for (let i: number = 1; i < 64; i++) {
      let number = i.toString(2)
      for (let i: number = 6 - String(number).length; i > 0; i--) {
         number = "0" + number
      }
      if (Number(number[digit]) == 1) {
         str = str + String(i) + ", "
      }
   }
   document.querySelector(".numbers")!.textContent = str

   throw Error()
}

yes.addEventListener("click", function (): never {
   if (i === 0) {
      i--
      guessNumber = guessNumber + 2 ** (4 - i)
      finalGuess()
   } else {
      i--
      num2binary(i)
      guessNumber = guessNumber + 2 ** (4 - i)
   }

   throw Error()
})

no.addEventListener("click", function (): never {
   if (i === 0) {
      finalGuess()
   } else {
      i--
      num2binary(i)
   }

   throw Error()
})

start.addEventListener("click", function (): never {
   left!.classList.remove("hidden")
   right!.classList.remove("hidden")
   down!.classList.add("hidden")
   num2binary(i)

   throw Error()
})

document.querySelector(".again")!.addEventListener("click", function (): never {
   left!.classList.add("hidden")
   right!.classList.add("hidden")
   document.querySelector("body")!.style.backgroundColor = "#222222"
   document.querySelector<HTMLDivElement>(".number")!.style.width = "15rem"
   document.querySelector<HTMLDivElement>(".number")!.textContent = "?"
   sentence!.classList.add("hidden")
   down!.classList.remove("hidden")
   guessNumber = 0
   i = 5

   throw Error()
})

document
   .querySelector<HTMLButtonElement>(".back")!
   .addEventListener("click", function () {
      window.location.href = "../index.html"
   })
