const loginForm = document.getElementById("login-form")
console.log("from refreshed the js")

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    console.log(e)
    console.log(e.target)
    console,log(e.target,id)

    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)

})




