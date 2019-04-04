function init() {
    document.getElementById("username").value = "[[${#httpServletRequest.remoteUser}]]";
}
function logout() {
    localStorage.clear();
    navigate("logout");
}
function navigate(url) {
    location.href = url;
}
function getAllUsers() {
    var api = "api/user/all";
    getData(api);
}
function getSingleUser() {
    checkUsernameAndGetData("user/");
}
function isUserExist() {
    checkUsernameAndGetData("user/exist/");
}
function checkUsernameAndGetData(path) {
    if(document.getElementById('username').value) {
        var api = "api/" + path + document.getElementById('username').value;
        getData(api);
    } else {
        document.getElementById("demo").innerHTML = "Please enter an username";
    }
}
function deleteUser() {
    var usernameForDelete = document.getElementById('username').value;
    deleteData("api/user/"+usernameForDelete);
}
function postData(api, data){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 202) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "http://localhost:8082/"+api, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}
function deleteData(api){
    var xhttp = new XMLHttpRequest();
    document.getElementById('apiUrl').value = api;
    clearContainer();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("demo").innerHTML = JSON.parse(this.responseText).body;
        }
    };
    xhttp.open("DELETE", "http://localhost:8082/"+api, true);
    xhttp.send();
}
function getData(api){
    var xhttp = new XMLHttpRequest();
    document.getElementById('apiUrl').value = api;
        xhttp.onreadystatechange = function() {
        var demo = document.getElementById("demo");
        if (this.readyState === 4 && this.status === 200) {
            clearContainer();
            var parsed = JSON.parse(this.responseText).body;
            if(typeof parsed === "boolean"){
                demo.append(document.createTextNode("User exists: " + parsed));
            } else if(!parsed.hasOwnProperty("username")) {
                for (x in parsed) {
                    addUserToResult(parsed[x].username, parsed[x].password, parsed[x].role);
                }
            } else {
                addUserToResult(parsed.username, parsed.password , parsed.role);
            }
        } else if (this.status === 500){
            demo.append(document.createTextNode("Can\'t get the user(s)"));
            xhttp.abort();
        }
    };
    xhttp.open("GET", "http://localhost:8082/"+api);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function clearContainer() {
    document.getElementById("demo").innerHTML = "";
}
function addUserToResult(username, password, role) {
    var demo = document.getElementById("demo");
    demo.append(document.createElement("LABEL").innerText =
        "Username: " + username + "  -  Role: " + role);
    demo.append(document.createElement("BR"));
    demo.append(document.createElement("LABEL").innerText = "Password: " + password);
    demo.append(document.createElement("HR"));
}