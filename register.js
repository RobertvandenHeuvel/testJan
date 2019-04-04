    function addUser() {
        alert("add user called");
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var role = document.getElementById("role").value;
        if (username && password && role){
            var data = '{"username":"'+username+'", "password":"'+password+'", "role":"'+role+'"}';
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                alert(this.readyState + " - " + this.status);
                if (this.readyState === 4 && this.status === 200) {
                    if(JSON.parse(this.responseText).body.username) {
                        var user = JSON.parse(this.responseText).body;
                        document.getElementById("result").innerText = user.username + " added successfully"
                    } else {
                        document.getElementById("result").innerText = "User not added";
                    }
                }
            };
            xhttp.open("POST", "http://localhost:8082/api/user/add");
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(data);
        } else {
            document.getElementById("header").innerText = "Please fill all the fields";
        }
    }
