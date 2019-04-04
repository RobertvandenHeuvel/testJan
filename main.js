function go(form){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){

      if(this.readyState == 4){
          alert("Trainee toegevoegd aan database")
          }
    }
    xhr.open("POST", "http://localhost:8080/api/tra", true);
    var trainee = {};
    trainee.voornaam=form.vn.value;
    trainee.achternaam=form.an.value;
    trainee.geboortedatum=form.gd.value;
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(trainee));
}