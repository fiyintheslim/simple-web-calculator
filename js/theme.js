let toggle=document.querySelector(".toggle");
let slide=toggle.querySelector("span");
let body=document.querySelector("body");

let count=0;
let theme=["blue", "light", "purple"];

toggle.addEventListener("click", function(e){
    count= ++count%3;
    if(theme[count]==="light"){
        body.style.backgroundColor="hsl(0, 0%, 90%)";
        slide.style.transform=`translate(${50/3.5}px)`;
    }
    else if(theme[count] === "purple"){
        body.style.backgroundColor="hsl(268, 75%, 9%)";
        slide.style.transform=`translate(${50/2}px)`;
    }else{
        body.style.backgroundColor="hsl(222, 26%, 31%)";
        slide.style.transform=`translate(${0}px)`;
    }
})
