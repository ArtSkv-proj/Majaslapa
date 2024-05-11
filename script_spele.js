document.addEventListener("DOMContentLoaded", function(event){
    let The_Element = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
    The_Element.style.height = The_Element.clientWidth + "px"

});
window.addEventListener("resize",function(){
   let The_Element = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
The_Element.style.height = The_Element.clientWidth + "px"

let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket).querySelector(".Game_rocket" + currentRocket + "_hitbox");

The_Rocket.style.width = ((The_Element.clientWidth / 100) * 10) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 25) + "px"
});

function StartGame(that) {
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land").style.display = "block";
that.parentNode.style.display = "none";

let The_Element = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket).querySelector(".Game_rocket" + currentRocket + "_hitbox");
The_Rocket.style.width = ((The_Element.clientWidth / 100) * 10) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 25)
};

function Metres(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", true)
    if(fuel > 0) {
   fuel -= 0.1
   fuel = fuel.toFixed(1);
   that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).setAttribute("fuel", fuel);
    setTimeout(function(){Metres(that)}, 100);
} else {
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", false)
};

};

function RocketLaunched(that) {
that.style.display = "none"



that.parentNode.querySelector(".Game_Land_png").style.transition = that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).getAttribute("speed")
that.parentNode.querySelector(".Game_Land_png").style.bottom = "-20%" 
Metres(that)
objects(that)
};

function keys(e) {
    let key = e.key
    if(document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("playing") == "true") {
    if(key.toLowerCase() === "d") {
       let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
    let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
    if(!(rotation >= 180)) {
        rotation += 3
        rocket.parentNode.parentNode.setAttribute("rocketrotation", rotation)
        rocket.style.transform = "rotate(" + rotation + "deg)"
    }
    } else if(key.toLowerCase() === "a") {
        let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
     let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
     if(!(rotation <= -180)) {
     rotation -= 3
     rocket.parentNode.parentNode.setAttribute("rocketrotation", rotation)
     rocket.style.transform = "rotate(" + rotation + "deg)"
     }
    };
    };
};

function objects(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    if(fuel > 0) {
let obstacle = document.createElement("img")
let random = Math.floor(Math.random() * 2) + 1;
obstacle.src = "obstacle" + random + ".png"
obstacle.classList.add("obstacle")
obstacle.classList.add("obstacle_hitbox")
that.parentNode.appendChild(obstacle)

function move() {
    let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
    let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))

    if( -90 < rotation && rotation < 90) {
        let obstaclemovement = parseInt(getComputedStyle(obstacle).left) || 0;
        let obstaclemovement1 = parseInt(obstacle.style.left) || 0;

        let newrot

        if(rotation > 0) {
    newrot = Math.ceil(rotation * 0.075)
} else {
    newrot = Math.floor(rotation * 0.075)
};

        obstacle.style.left = obstaclemovement1 - newrot + "vw"
    } else if(( -90 > rotation && rotation > 90) || (-180 < rotation && rotation < 180) ) {

        let obstaclemovement = parseInt(getComputedStyle(obstacle).left) || 0;
        let obstaclemovement1 = parseInt(obstacle.style.left) || 0;

if(rotation > 0) {
    rotation = 90 - (rotation - 90)
} else {
    rotation = 90 + (rotation + 90)
}

        let newrot

        if(rotation > 0) {
    newrot = Math.ceil(rotation * 0.075)
} else {
    newrot = Math.floor(rotation * 0.075)
};

        obstacle.style.left = obstaclemovement1 + newrot + "vw"

    }
}
function fuelmove() {
    move()
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    if(fuel>0) {
        setTimeout(fuelmove, 200);
    };
}
fuelmove()


        setTimeout(function(){objects(that)}, 10000);
    };
}

document.addEventListener("keydown", keys);