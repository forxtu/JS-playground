function myFilter(){
	var filterInput = document.getElementById("filter__input");
	var listWrap = document.getElementById("filter__list-wrap");
	var listItem = listWrap.getElementsByTagName("li");
	var a;

	var filter = filterInput.value.toUpperCase();

	for(var i = 0; i < listItem.length; i++){
		a = listItem[i].getElementsByTagName("a")[0];

		if(a.innerHTML.toUpperCase().indexOf(filter) >= 0){
			listItem[i].style.display = "";
		}else{
			listItem[i].style.display = "none";
		}
	}
}