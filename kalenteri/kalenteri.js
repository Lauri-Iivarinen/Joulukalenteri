var taulu = "";
var randomPaiva = [3,15,5,11,23,16,20,12,4,17,21,10,13,7,8,1,9,24,2,14,6,19,22,18];
var date = new Date();
var paivamaara = date.getDate()
var month = date.getMonth();
console.log(randomPaiva.length);

//avaa aiemmin samalla selaimella avatut taulut
function openOld(){
    //local.clear OTETTAVA pois ennen julkaisua
    //localStorage.clear();
    /*KOMMENTOITU POIS TESTAUSTA VARTEN, OTETTAVA KÄYTTÖÖN VALMIISSA TUOTTEESSA*/
    for(var i=1; i<=paivamaara;i++){
        if(localStorage.getItem(i)==i){
            funktio(i);
        }
    }
}
for (i=0; i<24; i++){
    taulu += "<td><div class = 'tableInside' id='day"+randomPaiva[i]+"'><div class='imageContainer' id='imageContainerId"+randomPaiva[i]+"'><button class ='taulukko'id='door"+randomPaiva[i]+"' onclick='funktio("+randomPaiva[i]+");'>"+randomPaiva[i]+"</div></button></div></td>"
}

document.getElementById("tableBase").innerHTML = taulu;
//joka päivälle pitää tehdä funktio, testausta varten olemassa vain geneerinen "funktio"


// ovenavaus animaation funktio
// door1-24 = luukun avattava ovi --- backDoor1-24 elementti jossa kuva on
function doorAnimation(day){
    var element = document.querySelector(`#door${day}`);    //määrittä luukun jossa animaatio suoritetaan
        element.classList.toggle("doorOpen");   //triggeröi ovenavaus animaation
    var imageElement = document.getElementById(`imageContainerId${day}`);   //määrittää luukun johon kuva tulee
        imageElement.style.backgroundImage = `url(../kalenteri/kuvat/kuva${day}.png)`;   //luo kuvan takaoveen
    }


function funktio(day){
    if(checkDay(day)){
        console.log("DAY 2");
        localStorage.setItem(day,day);
        doorAnimation(day);
     }
    else{
        console.log("wrong day 2");
    }

}


//palauttaa true jos klikattu luukku vastaa kyseistä päivämäärää
function checkDay(day) {
    
    //month pitää vaihtaa joulukuussa "11"
    if (paivamaara >= day && month == 11){
        console.log("correct");
        return true;
    }
    /*Seuraava return true pitää poistaa valmiista ohjelmasta,
    se on olemassa vain testausta varten*/
    console.log("wrong");
    //return true;
}
