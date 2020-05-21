const btn = document.querySelector("#js-click");
const closeBtn = document.querySelector(".js-modal-close");
const modalNow = document.querySelector(".js-modal");

function btnDo(){
    
    if(modalNow.style.display === "block"){
        modalNow.style.display = "none";
    } else {
        modalNow.style.display = "block";
    }
}

function modalClose(){
    modalNow.style.display = 'none';
    
}

btn.addEventListener("click", btnDo);
closeBtn.addEventListener("click", modalClose)
window.onclick = function(event){
    if (event.target === modalNow) {
        modalNow.style.display = "none";
      }
}

function init(){

}

init();