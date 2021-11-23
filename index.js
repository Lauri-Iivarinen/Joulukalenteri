var text = "*"
var barText = ""


var timer = 600;
var i = 0;

setInterval(function(){
        i++
        if(i>=10){
            downloading();
        }else if(i%4===1){
            document.getElementById("start").innerHTML = "<h1>ACCESSING FILES.</h1>"
        }else if(i%4===2){
            document.getElementById("start").innerHTML = "<h1>ACCESSING FILES..</h1>"
        }else if(i%4===3){
            document.getElementById("start").innerHTML = "<h1>ACCESSING FILES...</h1>"
        }else{
            document.getElementById("start").innerHTML = "<h1>ACCESSING FILES</h1>"
        }

},timer)

function downloading(){
    var counter=0;
    setInterval(function(){
        counter++;
        if(counter>=10){
            window.location.href = "kalenteri/kalenteri.html"
        }else{
        document.getElementById("barStart").innerHTML = "["
        document.getElementById("barEnd").innerHTML = "]"
        barText += text
        document.getElementById("start").innerHTML = "<h1>OPENING /DOCUMENTS/TOP _SECRET/XMAS</h1>"
        document.getElementById("bar").innerHTML = barText
        }

},timer)
}