var output = document.getElementById('output');
var array = ["js", "hmtl", "css", "vuejs", 2, 8, 33, "js", "hmtl", "css", "vuejs", 2, 8, 33, 33, 33];
var clearArray = removeDuplicates(array);

output.innerHTML = array + "<br>" + clearArray;

function removeDuplicates(arr){
    var cArray = [];
    var cObject = {};
    var x = '';
    for (var i = 0; i < arr.length; i++){
        cObject[arr[i]] = "test";
    }
    for (x in cObject) {
        cArray.push(x);
    }
    console.log(cArray);
    return cArray;
}