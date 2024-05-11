document.addEventListener("DOMContentLoaded", function(event){
    let The_Element = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
    The_Element.style.height = The_Element.clientWidth + "px"

});
window.addEventListener("resize",function(){
   let The_Element = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
The_Element.style.height = The_Element.clientWidth + "px"

let The_Rocket = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket1 .Game_rocket1_hitbox")
The_Rocket.style.width = ((The_Element.clientWidth / 100) * 10) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 25) + "px"
});

function StartGame(that) {
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land").style.display = "block";
that.parentNode.style.display = "none";

let The_Element = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
let The_Rocket = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket1 .Game_rocket1_hitbox")
The_Rocket.style.width = ((The_Element.clientWidth / 100) * 10) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 25)
};

function Metres(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", true)
    if(fuel > 0) {
   fuel -= 0.1
   fuel = fuel.toFixed(1);
   that.parentNode.querySelector(".Game_rocket1").setAttribute("fuel", fuel);
    setTimeout(function(){Metres(that)}, 100);
} else {
    that.parentNode.querySelector(".Game_rocket1").setAttribute("active", false)
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", false)
};

};

function RocketLaunched(that) {
that.style.display = "none"

that.parentNode.querySelector(".Game_Land_png").style.transition = that.parentNode.querySelector(".Game_rocket1").getAttribute("speed")
that.parentNode.querySelector(".Game_Land_png").style.bottom = "-20%" 
Metres(that)
};

function keys(e) {
    let key = e.key
    if(document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("playing") == "true") {
    if(key.toLowerCase() === "d") {
    
    }
    };
    };

document.addEventListener("keydown", keys);