
// Smooth scroll to Gallery

function scrollToGallery() {

    document
    .getElementById("gallery")
    .scrollIntoView({

        behavior: "smooth"

    });

}



// Birthday Surprise Button

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        createConfetti();

        setTimeout(() => {

            alert(
`🎂 Happy Birthday தோழி🌙 ❤️

Thank you for being such a beautiful part of this world.

May your smile always shine like the moon 🌙

Wishing you Happiness,
Success,
and Endless Smiles 💙☀️`
            );

        },500);

    });

}



// Simple Confetti Effect

function createConfetti(){

    for(let i=0;i<80;i++){

        const confetti=document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=

        Math.random()*3+2+"s";

        confetti.style.background=

        randomColor();

        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}



// Random Colors

function randomColor(){

    const colors=[

    "#FFD54F",

    "#87CEFA",

    "#FFF4A3",

    "#ffffff",

    "#B0E0FF"

    ];



    return colors[

    Math.floor(

    Math.random()*colors.length

    )

    ];

}



// Add Confetti Style Dynamically

const style=document.createElement("style");



style.innerHTML=`

.confetti{

position:fixed;

top:-20px;

width:12px;

height:12px;

border-radius:50%;

z-index:9999;

animation:fall linear forwards;

}



@keyframes fall{

0%{

transform:

translateY(0)

rotate(0deg);

opacity:1;

}



100%{

transform:

translateY(110vh)

rotate(720deg);

opacity:0;

}

}

`;



document.head.appendChild(style);



// Fade In Animation On Scroll

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=

"translateY(0px)";

}

});

});



const sections=document.querySelectorAll(

".story,.gallery,.reasons,.message,.music,.final"

);



sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=

"translateY(60px)";

section.style.transition=

"all 1s ease";

observer.observe(section);

});



// Floating Moon Animation

const moon=document.querySelector(".moon");



if(moon){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/50;

const y=(window.innerHeight/2-e.pageY)/50;



moon.style.transform=

`translate(${x}px,${y}px)`;

});

}

