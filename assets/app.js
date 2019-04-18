window.onload = function(){

    var dirt = document.getElementsByClassName('dirt');

    var sound = document.getElementById("sound");
    var grid = document.getElementById("dirtbox");
    var score = 0;

    for(let i = 0; i < dirt.length; i++){
        dirt[i].addEventListener("click", function(){
                if (dirt[i].innerHTML){
                    sound.play();
                    dirt[i].innerHTML = "";
                    score++;
                    document.getElementById("score").innerHTML = "Score: " + score;
                } else {
                    console.log("nothing is in there");
                }
            });
        };


setInterval(function setMole(){
    var mole = document.createElement("div");
    mole.setAttribute("id", "mole");
    var randInt = Math.floor(Math.random() * Math.floor(dirt.length));
    if (dirt[randInt].innerHTML === ""){
        dirt[randInt].appendChild(mole);
    } else {
        console.log("There are too many moles");
    }
},3000)};