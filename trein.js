function logout() {
    localStorage.clear();
    navigate("C:/Users/rober/Documents/Qien/Eclipse Workspace/testJan/index.html");
}
function navigate(url) {
    location.href = url;
}
function treinVersturen(){
    var api = document.getElementById("apiUrl").value;
    var merk = document.getElementById("treinMerk").value;
    var trein = '{"merk":"'+merk+'"}';
    postData(api, trein);
}
function postData(api, data){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 202) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "http://localhost:8082/"+api, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}
function getData(api){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:8082/"+api);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}