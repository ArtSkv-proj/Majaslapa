document.addEventListener("DOMContentLoaded", function(event){
let thing = document.body.querySelector("main").children
for(let i = 0; i < thing.length; i++) {
if(thing[i].classList.contains("starmain")){
if(thing[i].querySelector(".star .star_img").clientWidth != thing[i].querySelector(".star").clientWidth) {
    thing[i].querySelector(".star .star_img").style.width = "100%"
    
};
};
};
});

/* Ar nolūku, ka var nokopēt tekstu mājaslapā, ja nepieciešams, :hover css to neļauj*/

function TrayAppear(that) {

    starmain = that.parentNode;
    /*const childs = starmain.children;*/
    if(that.classList.contains("star")){
        starmain.querySelector(".traytext").style.visibility ="visible";
        starmain.querySelector(".traytext").style.opacity = "1";


        /*
    for(let i = 0; i < childs.length; i++){
    if (childs[i].classList.contains("traytext")) {
        childs[i].style.visibility ="visible";
        childs[i].style.opacity = "1";
break;
    };
    };
*/


} else if (that.classList.contains("traytext")){

if(that.parentNode.querySelector(".star").getAttribute("working") === "true") {
    that.parentNode.querySelector(".star").setAttribute("working",  "false")
};
};
};



function TrayDisappear(that) {
    if(that.classList.contains("star")){
    if(that.getAttribute("working") === "false") {
        that.setAttribute("working",  "true")
        setTimeout(() => {
            if(that.getAttribute("working") === "true") {

    starmain = that.parentNode;
    /*const childs = starmain.children;*/

    starmain.querySelector(".traytext").style.visibility ="hidden";
        starmain.querySelector(".traytext").style.opacity = "0";
    /*
    for(let i = 0; i < childs.length; i++){
    if (childs[i].classList.contains("traytext")) {
        childs[i].style.visibility ="hidden";
        childs[i].style.opacity = "0";

        
    };
    };
*/

    that.setAttribute("working",  "false")
};
}, 0); /* nav ne jausmas kāpēc tas strādā, bet kad ņemu ārā tad nekas vairs nestrādā, tāpēc lai paliek kā ir (laikam tas strādā, jo joprojām paliek kautkāda puse no milisekundes un ar to pilnībā pietiek) */

    };
} else if(that.classList.contains("traytext")){
   that.style.visibility ="hidden";
    that.style.opacity = "0";
};
};

function ListClick(that) {
var element = document.getElementById(that.textContent)
element.scrollIntoView({
behavior:"smooth",
block: "center"
})
};
