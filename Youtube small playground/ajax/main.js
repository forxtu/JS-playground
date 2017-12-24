window.onload = function () {
    var btn = document.querySelector('#shop-ip');

    btn.onclick = function () {
        //get
        ajaxGet('ip.php', function (data) {
            console.log(data)
        });

        //post
        var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
        ajaxPost(params);
    }
}

// ajax get
function ajaxGet(url, callback) {
    var f = callback || function(data){}

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            f(request.responseText);
        }
    }

    request.open('GET', url);
    request.send();
}

// ajax post
function ajaxPost(params){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (request.responseText == 1) {
                alert("Success!")
            } else {
                document.querySelector('#myip').innerHTML = request.responseText;
            }
        }
    }

    request.open('POST', 'ip.php');
    request.send(params);
    request.setRequestHeader('Content-type', 'appication/x-www-form-urlencoded');
}