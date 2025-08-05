const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")



function timer(){
modal.style.display = "block"
}

setTimeout(timer,1500)


modalCloseBtn.addEventListener("click", function(){
modal.style.display = "none"
})

consentForm.addEventListener("submit" ,function(e){
     e.preventDefault();
    modalText.innerHTML = `<div class="modal-inner-loading">
			<img src="images/loading.svg" class="loading">
			<p id="uploadText">Uploading your data to the dark web...</p>
		</div>`

        setTimeout(function() {
            document.getElementById("uploadText").textContent="Making the sale...";

        }, 1500);
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
