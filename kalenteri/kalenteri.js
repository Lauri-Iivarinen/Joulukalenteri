var taulu = "";
for (i=1; i<=24; i++){
    if ((i-1) %6  == 0){
        taulu += "<br>"
    }
    taulu += "<td><button class ='taulukko' id='day"+i+"' onclick='funktio();'>"+i+"</button></td>"
}

document.getElementById("table").innerHTML = taulu;

function funktio(){
    console.log("DAY 1")
    document.getElementById("day1").style.backgroundColor = "black";
}