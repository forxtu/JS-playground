var modal__wrap = document.getElementById("modal__wrap");
var image = document.getElementById("image");
var modal__close = document.getElementById("modal__close");
var modal__image = document.getElementById("modal__image");
var modal__caption = document.getElementById("modal__caption");
var modal_overlay = document.getElementById("modal__overlay");

modal__close.onclick = function(){
	modal__wrap.style.display = "none";
}

image.onclick = function(){
	modal__wrap.style.display = "flex";
	modal__caption.innerHTML = this.alt;
	modal__image.src = this.src;
}
modal__overlay.onclick = function(){
	modal__wrap.style.display = "none";
}