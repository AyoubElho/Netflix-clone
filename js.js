let a = document.getElementById("fix")
onscroll = function(){
    if (scrollY >= 1000) {
        a.style.display = 'block'
    }
    else{
    a.style.display = 'none'}
}
