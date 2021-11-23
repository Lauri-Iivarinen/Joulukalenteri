var taulu = "";
for (i=1; i<=24; i++){
    taulu += "<td><div class = 'tableInside' id='day"+i+"'><button class ='taulukko' onclick='funktio"+i+"("+i+");'>"+i+"</div></button></td>"
}

document.getElementById("tableBase").innerHTML = taulu;
//joka päivälle pitää tehdä funktio, testausta varten olemassa vain geneerinen "funktio"
function funktio1(day){
    if(checkDay(day)){
        console.log("DAY 1")
        document.getElementById("day1").innerHTML = "<img src = 'kuvat/kuva1.png' height=150px width =150px'>"
    }else{
        console.log("wrong day");
    }
    
}

function funktio2(day){
    if(checkDay(day)){
        console.log("DAY 2");
     }
    else{
        console.log("wrong day 2");
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
