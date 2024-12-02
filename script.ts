const btnGuessMe = document.querySelector(".modalGuessMe")! as HTMLButtonElement
const btnIGuessYou = document.querySelector(
   ".modalIGuessYou"
)! as HTMLButtonElement
const btnGuessDual = document.querySelector(
   ".modalGuessDual"
)! as HTMLButtonElement
const overlay = document.querySelector(".overlay")! as HTMLDivElement

document
   .querySelector<HTMLButtonElement>(".guessMe")!
   .addEventListener("click", function () {
      displayModal(".modalGuessMe")
   })

document
   .querySelector<HTMLButtonElement>(".iGuessYou")!
   .addEventListener("click", function () {
      displayModal(".modalIGuessYou")
   })

document
   .querySelector<HTMLButtonElement>(".guessDual")!
   .addEventListener("click", function () {
      displayModal(".modalGuessDual")
   })

document
   .querySelector<HTMLButtonElement>(".modal-1")!
   .addEventListener("click", function () {
      displayModal(".modalGuessMe")
   })

document
   .querySelector<HTMLButtonElement>(".modal-2")!
   .addEventListener("click", function () {
      displayModal(".modalIGuessYou")
   })

document
   .querySelector<HTMLButtonElement>(".modal-3")!
   .addEventListener("click", function () {
      displayModal(".modalGuessDual")
   })

document
   .querySelector<HTMLButtonElement>(".overlay")!
   .addEventListener("click", function () {
      btnGuessMe.classList.add("hidden")
      btnIGuessYou.classList.add("hidden")
      btnGuessDual.classList.add("hidden")
      overlay.classList.add("hidden")
   })

const displayModal = function (btn: string) {
   document.querySelector<HTMLButtonElement>(btn)!.classList.toggle("hidden")
   overlay.classList.toggle("hidden")
}
