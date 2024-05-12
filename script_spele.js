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
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel").style.display = "flex"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_text").style.display = "flex"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed_price").style.display = "flex"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_price").style.display = "flex"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed").style.display = "flex"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed_text").style.display = "flex"
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_bar").setAttribute("value",document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_bar").getAttribute("max"))

    let currentRocket = document.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket");
    that.parentNode.querySelector(".Game_rocket" + currentRocket).setAttribute("fuel", that.parentNode.querySelector(".Game_rocket" + currentRocket).getAttribute("maxfuel"))

    let elements = document.body.querySelectorAll("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .obstacle")
    for(let i = 0; i < elements.length; i++) {
elements[i].remove()
    };
    let The_Rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_rocket" + currentRocket)
    The_Rocket.style.transform = "rotate(0deg)"
    The_Rocket.parentNode.parentNode.setAttribute("rocketrotation", "0")


    The_Rocket.parentNode.querySelector(".Game_cash").setAttribute("cash", (parseFloat(The_Rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")) + parseFloat(The_Rocket.parentNode.querySelector(".Game_kilometres").getAttribute("kilometres"))).toFixed(2))
    The_Rocket.parentNode.querySelector(".Game_cash").innerHTML = The_Rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")
    The_Rocket.parentNode.querySelector(".Game_kilometres").setAttribute("kilometres", 0)
    The_Rocket.parentNode.querySelector(".Game_kilometres").innerHTML = "0"
}


function kilometres(that) {
    var fuel = parseFloat(that.parentNode.querySelector(".Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket")).getAttribute("fuel")).toFixed(1)
    if(document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("playing") == "true") {
    if(fuel > 0) {
   fuel -= 0.1
   fuel = fuel.toFixed(1);
   that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).setAttribute("fuel", fuel);


   let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
   let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
   let kilometre
   if(rotation >= 0) {
 kilometre = Math.abs((-1/90) * rotation + 1);
   } else {
 kilometre = Math.abs((1/90) * rotation + 1);
   };
   kilometre = parseFloat(kilometre) * parseFloat(rocket.getAttribute("speed"))
   let Game_kilometres =  document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_kilometres")
   let Fuel_bar = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_bar")

   Fuel_bar.setAttribute("value", fuel)
   Game_kilometres.setAttribute("kilometres",parseFloat(parseFloat(Game_kilometres.getAttribute("kilometres")) + kilometre).toFixed(2))
   Game_kilometres.innerHTML = Game_kilometres.getAttribute("kilometres")


    setTimeout(function(){kilometres(that)}, 100);
} else {
    EndGame()
};
    };
};

function RocketLaunched(that) {
that.style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel").style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_text").style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed").style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed_text").style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_speed_price").style.display = "none"
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_price").style.display = "none"

document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").setAttribute("playing", "true")

that.parentNode.querySelector(".Game_Land_png").style.transition = (1 / parseFloat(that.parentNode.querySelector(".Game_rocket" + that.parentNode.parentNode.getAttribute("currentrocket")).getAttribute("speed"))) + "s"
that.parentNode.querySelector(".Game_Land_png").style.bottom = "-20%" 
kilometres(that)
objects(that)
};


function keys(e) {
    let key = e.key
    if(document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("playing") == "true") {
    if(key.toLowerCase() === "d" || key === "ArrowRight") {
       let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))
    let rotation = parseInt(rocket.parentNode.parentNode.getAttribute("rocketrotation"))
    if(!(rotation >= 90)) {
        rotation += 3
        rocket.parentNode.parentNode.setAttribute("rocketrotation", rotation)
        rocket.style.transform = "rotate(" + rotation + "deg)"
    }
    } else if(key.toLowerCase() === "a" || key === "ArrowLeft") {
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
if(parseFloat(obstacle.style.top) > parseFloat("110%")) {
obstacle.remove()
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

function Upgrade(that) {
    let rocket = document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_rocket" + document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas").getAttribute("currentrocket"))


let price =  100 * parseInt(rocket.getAttribute(that.getAttribute("shop") + "_u")) * 2
let cash = parseFloat(rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")).toFixed(2)
console.log(price)
console.log(cash)

if(!(rocket.getAttribute(that.getAttribute("shop") + "_u") >= parseInt("10")) && price <= cash) {
let numb = parseInt(rocket.getAttribute(that.getAttribute("shop") + "_u")) + 1
rocket.parentNode.querySelector(".Game_cash").setAttribute("cash", parseFloat(rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")) - price)
rocket.parentNode.querySelector(".Game_cash").innerHTML = parseFloat(rocket.parentNode.querySelector(".Game_cash").getAttribute("cash")).toFixed(2)  

rocket.setAttribute(that.getAttribute("shop") + "_u", numb)

that.parentNode.querySelector(".Game_" + that.getAttribute("shop") + "_text").innerHTML = rocket.getAttribute(that.getAttribute("shop") + "_u")


if(that.getAttribute("shop") == "fuel"){
    rocket.setAttribute("max" + that.getAttribute("shop"), 10 * parseInt(rocket.getAttribute(that.getAttribute("shop") + "_u")))
    rocket.setAttribute(that.getAttribute("shop"), rocket.getAttribute("max" + that.getAttribute("shop")))
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_bar").setAttribute("max",rocket.getAttribute("max" + that.getAttribute("shop")))
    document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_fuel_bar").setAttribute("value", rocket.getAttribute("max" + that.getAttribute("shop")))
}  else {
    rocket.setAttribute(that.getAttribute("shop"), parseInt(rocket.getAttribute(that.getAttribute("shop") + "_u")))
}
document.body.querySelector("main .Game_Main .Game_Canvas_Borders .Game_Canvas .Game_Land .Game_" + that.getAttribute("shop") + "_price").innerHTML = price * 2

        console.log(that.getAttribute("shop"))
        console.log(rocket.getAttribute(that.getAttribute("shop") + "_u"))
};
}