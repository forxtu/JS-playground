var modalButton = document.getElementById("modal__button");
var modalWrap = document.getElementById("modal__overflow");
var modalCloseButton = document.getElementsByClassName("modal__close")[0];

modalButton.addEventListener("click", modalShow);
function modalShow(){
	modalWrap.style.display = "block";
}

modalCloseButton.addEventListener("click", modalClose);
function modalClose(){
	modalWrap.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modalWrap){
		modalWrap.style.display = "none";
	}
}
