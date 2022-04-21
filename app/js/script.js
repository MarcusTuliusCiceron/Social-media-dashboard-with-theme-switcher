const toggle = document.querySelector('.theme_toggle')
const body = document.querySelector('body')

let ligth = false

toggle.addEventListener("click", ()=>{
    console.log("click")
    if (ligth){
        body.id = ""
    }
    else{
        body.id = "light"
    }
    ligth = !ligth
})