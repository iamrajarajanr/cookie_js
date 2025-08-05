const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")

function timer(){
modal.style.display = "block"
}

setTimeout(timer,1500)


modalCloseBtn.addEventListener("click", function(){
modal.style.display = "none"
})

// console.log("1")

// function runner(){
// console.log("2")
// }
// setTimeout(runner,900)

// console.log("3")


// function first(){
//     console.log("first")
// }

// function second(){
//     console.log("second")
// }

// function third(){
//     console.log("third")
// }

// setTimeout(first,1500)
// setTimeout(second,2500)
// setTimeout(third,3500)
