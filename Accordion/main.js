var accordionHeader = document.getElementsByClassName('accordion__header');
var accordionPanels = document.getElementsByClassName('accordion__panel');

for(var i = 0; i < accordionHeader.length; i++){
	accordionHeader[i].onclick = function(){
		for(var j = 0; j < accordionPanels.length; j++){
			accordionPanels[j].classList.remove('show');
		}
		this.nextElementSibling.classList.toggle('show');
	}
}