var	tabHead = document.getElementsByClassName('tabs__head');
var	tabContent = document.getElementsByClassName('tabs__content');
hideTabsContent(1);

function hideTabsContent(a){
	for(var i = a; i < tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tabHead[i].classList.remove('whiteborder');
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tabHead[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

document.getElementById('tabs__wrap').onclick = function(event){
	var target = event.target;
	if(target.className = 'tabs__head'){
		for(var i = 0; i < tabHead.length; i++){
			if(target == tabHead[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

