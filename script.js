let bars = document.querySelector('.bars')
let nav = document.querySelector('.response-nav')


bars.addEventListener("click",function(e){
        nav.style.right="0px"
    e.preventDefault()
})
nav.addEventListener('click',function(e){

    nav.style.right="-1000px"
    e.preventDefault()
})