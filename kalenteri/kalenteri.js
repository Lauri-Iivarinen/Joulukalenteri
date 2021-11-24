var taulu = "";
var randomPaiva = [3,15,5,11,23,16,20,12,4,17,21,10,13,7,8,1,9,24,2,14,6,19,22,18];

console.log(randomPaiva.length)
for (i=0; i<24; i++){
    taulu += "<td><div class = 'tableInside' id='day"+randomPaiva[i]+"'><button class ='taulukko' onclick='funktio"+randomPaiva[i]+"("+randomPaiva[i]+");'>"+randomPaiva[i]+"</div></button></td>"
}

document.getElementById("tableBase").innerHTML = taulu;
//joka päivälle pitää tehdä funktio, testausta varten olemassa vain geneerinen "funktio"
function funktio1(day){
    if(checkDay(day)){
        console.log("DAY 1")
        document.getElementById("day1").innerHTML = "<img src = 'kuvat/kuva1.png' height=150px width =150px'>"
    }else{
        console.log("wrong day");
        //varmuuskopio
    }

    
}

function funktio2(day){
    if(checkDay(day)){
        console.log("DAY 2");
        document.getElementById("day"+day).innerHTML = "<img src = 'kuvat/kuva"+day+".png' height=150px width=150px'>"
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
        console.log("correct");
        return true;
    }
    /*Seuraava return true pitää poistaa valmiista ohjelmasta,
    se on olemassa vain testausta varten*/
    console.log("wrong");
    return true;
}
