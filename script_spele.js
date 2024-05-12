document.addEventListener("DOMContentLoaded", function(event){
    let The_Element = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
    The_Element.style.height = The_Element.clientWidth + "px"

});
window.addEventListener("resize",function(){
   let The_Element = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
The_Element.style.height = The_Element.clientWidth + "px"

let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket).querySelector(".Game_rocket" + currentRocket + "_hitbox");

The_Rocket.style.width = ((The_Element.clientWidth / 100) * 5) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 12.5) + "px"
});

function StartGame(that) {
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land").style.display = "block";
that.parentNode.style.display = "none";

let The_Element = this.document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas")
let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket).querySelector(".Game_rocket" + currentRocket + "_hitbox");
The_Rocket.style.width = ((The_Element.clientWidth / 100) * 5) + "px"
The_Rocket.style.height = ((The_Element.clientHeight / 100) * 12.5) + "px"
};

function EndGame(that) {
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", "false")
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_retry").style.display = "block"
}
function Retry(that) {
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_Land_png").style.bottom = "0"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_retry").style.display = "none"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_Rocket_Launch").style.display = "block";
    
    let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
    that.parentNode.querySelector(".Game_rocket" + currentRocket).setAttribute("fuel", that.parentNode.querySelector(".Game_rocket" + currentRocket).getAttribute("maxfuel"))

    let elements = document.body.querySelectorAll("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .obstacle")
    for(let i = 0; i < elements.length; i++) {
elements[i].remove()
    };
    let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket)
    The_Rocket.style.transform = "rotate(0deg)"
    The_Rocket.parentNode.parentNode.setAttribute("rocketrotation", "0")


    The_Rocket.parentNode.querySelector(".Game_cash").setAttribute("cash", (parseFloat(The_Rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")) + parseFloat(The_Rocket.parentNode.querySelector(".Game_metres").getAttribute("metres"))).toFixed(2))
    The_Rocket.parentNode.querySelector(".Game_cash").innerHTML = The_Rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")
    The_Rocket.parentNode.querySelector(".Game_metres").setAttribute("metres", 0)
    The_Rocket.parentNode.querySelector(".Game_metres").innerHTML = "0"
}


function Metres(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket")).getAttribute("fuel")).toFixed(1)
    
    if(fuel > 0) {
   fuel -= 0.1
   fuel = fuel.toFixed(1);
   that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).setAttribute("fuel", fuel);

   let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
   let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
   let metre
   if(rotation >= 0) {
 metre = Math.abs((-1/90) * rotation + 1);
   } else {
 metre = Math.abs((1/90) * rotation + 1);
   };
   let Game_metres =  document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_metres")
   Game_metres.setAttribute("metres",parseFloat(parseFloat(Game_metres.getAttribute("metres")) + metre).toFixed(2))
   Game_metres.innerHTML = Game_metres.getAttribute("metres")
    setTimeout(function(){Metres(that)}, 100);
} else {
    EndGame()
};

};

function RocketLaunched(that) {
that.style.display = "none"


document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", "true")

that.parentNode.querySelector(".Game_Land_png").style.transition = that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).getAttribute("speed") + "s"
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
    if(!(rotation >= 90)) {
        rotation += 3
        rocket.parentNode.parentNode.setAttribute("rocketrotation", rotation)
        rocket.style.transform = "rotate(" + rotation + "deg)"
    }
    } else if(key.toLowerCase() === "a") {
        let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
     let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
     if(!(rotation <= -90)) {
     rotation -= 3
     rocket.parentNode.parentNode.setAttribute("rocketrotation", rotation)
     rocket.style.transform = "rotate(" + rotation + "deg)"
     }
    };
    };
};

function objects(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
   if(document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("playing") == "true") {
    if(fuel > 0) {
let obstacle = document.createElement("img")
let random = Math.floor(Math.random() * 2) + 1;
let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
obstacle.src = "obstacle" + random + ".png"
obstacle.classList.add("obstacle")
obstacle.classList.add("obstacle_hitbox")
that.parentNode.appendChild(obstacle)

let the_bool = false

function collide() {
var collision = !(obstacle.getBoundingClientRect().right < rocket.getBoundingClientRect().left ||
    obstacle.getBoundingClientRect().left > rocket.getBoundingClientRect().right ||
obstacle.getBoundingClientRect().bottom < rocket.getBoundingClientRect().top ||
obstacle.getBoundingClientRect().top > rocket.getBoundingClientRect().bottom
);

if(collision) {
    EndGame()
}
}

function move() {
    
    let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
let speed = rocket.getAttribute("speed")

    if( -91 < rotation && rotation < 91) {
        
        let obstaclemovement1 = parseFloat(obstacle.style.left) || 0;
        let obstaclemovement2 = parseFloat(obstacle.style.top) || 0;
        let randompos  = (Math.floor(Math.random() * 90) + 1);

        if(the_bool === false) {
            let randompos = obstaclemovement1 = (Math.floor(Math.random() * 90) + 1);
            the_bool = true
        }



        let newrot

        if(rotation > 0) {
    newrot = rotation * 0.01
} else {
    newrot = rotation * 0.01
};
        obstacle.style.left = obstaclemovement1 - newrot + "%"
        collide()

}

}
function move2() {
   
    let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
let speed = rocket.getAttribute("speed")

    if( -91 < rotation && rotation < 91) {
        
        let obstaclemovement2 = parseFloat(obstacle.style.top) || 0;
        


obstacle.style.top = (obstaclemovement2 + 1) + "%"
if(parseFloat(obstacle.style.top) > parseFloat("100%")) {
console.log(obstacle.style.top);
};

}
}
function fuelmove() {
    move()
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    if(fuel>0) {
        setTimeout(fuelmove, 10);
    };
}
function fuelmove2() {
    move2()
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket1").getAttribute("fuel")).toFixed(1)
    if(fuel>0) {
        setTimeout(fuelmove2, 50);
    };
}
fuelmove2()
fuelmove()


        setTimeout(function(){objects(that)}, 3000);
    };
}
}

document.addEventListener("keydown", keys);