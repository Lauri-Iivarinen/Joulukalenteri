var taulu = "";
for (i=1; i<=24; i++){
    if ((i-1) %6  == 0){
        taulu += "<br>"
    }
    taulu += "<td><button class ='taulukko' id='day"+i+"' onclick='funktio("+i+");'>"+i+"</button></td>"
}

document.getElementById("table").innerHTML = taulu;

function funktio(day){
    if(checkDay(day)){
        console.log("DAY 1")
        document.getElementById("day1").style.backgroundColor = "black";
    }else{
        console.log("wrong day");
    }
    
}


//palauttaa true jos klikattu luukku vastaa kyseistä päivämäärää
function checkDay(day) {
    var date = new Date();
    var paivamaara = date.getDate()
    var month = date.getMonth();
    //month pitää vaihtaa joulukuussa "11"
    if (paivamaara >= day && month == 10){
        return true;
    }
    /*Seuraava return true pitää poistaa valmiista ohjelmasta,
    se on olemassa vain testausta varten*/
    return true;
}