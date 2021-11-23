var taulu = "";
for (i=1; i<=24; i++){
    if ((i-1) %6  == 0){
        taulu += "<br>"
    }
    taulu += "<td id='day"+i+"'><button onclick='funktio"+i+"();'>"+i+"</button></td>"
}

document.getElementById("table").innerHTML = taulu;

function funktio1(){
    console.log("DAY 1")
    document.getElementById("day1").innerHTML = "<tdPÄIVÄ 1</td>"
}