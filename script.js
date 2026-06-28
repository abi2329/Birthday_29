/* =======================

SMOOTH SCROLL

======================= */

function scrollToSection(id) {

    document.getElementById(id)

        .scrollIntoView({

            behavior: "smooth"

        });

}





/* =======================

SECRET LETTER

======================= */

const openLetter =

    document.getElementById("openLetter");

const letter =

    document.getElementById("letter");



openLetter.addEventListener(

    "click",

    () => {

        if (

            letter.style.display === "block"

        ) {

            letter.style.display = "none";

            openLetter.innerHTML =

                "Open Letter 💌";

        }

        else {

            letter.style.display = "block";

            openLetter.innerHTML =

                "Close Letter ❤️";

        }

    }

);

/* =======================
MUSIC MOON
======================= */

const musicMoon = document.getElementById("musicMoon");
const song = document.getElementById("song");

if (musicMoon && song) {

    let isPlaying = false;

    musicMoon.addEventListener("click", () => {

        if (!isPlaying) {

            song.play();

            musicMoon.classList.add("active");

            isPlaying = true;

        } else {

            song.pause();

            musicMoon.classList.remove("active");

            isPlaying = false;

        }

    });

}





/* =======================

FINAL POPUP

======================= */

const surpriseBtn = document.getElementById("surpriseBtn");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");


if (surpriseBtn && popup && closePopup) {

    surpriseBtn.addEventListener("click", () => {

        popup.style.display = "flex";

        createConfetti();

    });


    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });


    window.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}





/* =======================

CLICK OUTSIDE CLOSE

======================= */

window.addEventListener(

    "click",

    (e) => {

        if (

            e.target === popup

        ) {

            popup.style.display =

                "none";

        }

    }

);

/* =======================

CONFETTI EFFECT

======================= */

function createConfetti() {


    for (let i = 0; i < 100; i++) {


        const confetti =

            document.createElement("div");


        confetti.classList.add(

            "confetti"

        );


        document.body.appendChild(

            confetti

        );



        confetti.style.left =

            Math.random() * 100 + "vw";


        confetti.style.top =

            "-20px";


        confetti.style.width =

            Math.random() * 10 + 5 + "px";


        confetti.style.height =

            Math.random() * 15 + 5 + "px";



        const colors = [

            "#fde68a",

            "#60a5fa",

            "#ffffff",

            "#93c5fd",

            "#f9a8d4"

        ];


        confetti.style.background =

            colors[

            Math.floor(

                Math.random()

                * colors.length)

            ];



        confetti.style.position =

            "fixed";


        confetti.style.borderRadius =

            "5px";


        confetti.style.zIndex =

            "9999";


        confetti.style.opacity =

            "0.8";



        confetti.animate(

            [

                {

                    transform:

                        `translateY(0)

rotate(0deg)`

                },


                {

                    transform:

                        `translateY(

${window.innerHeight + 100}px)

rotate(

${Math.random() * 720}deg)`

                }

            ],

            {

                duration:

                    Math.random() * 3000

                    + 3000,

                iterations: 1

            }

        );



        setTimeout(() => {

            confetti.remove();

        }, 6000);


    }

}







/* =======================

MOON PARALLAX EFFECT

======================= */

const bgMoon =

    document.getElementById(

        "moon"

    );



document.addEventListener(

    "mousemove",

    (e) => {


        const x =

            (e.clientX

                / window.innerWidth

                - 0.5) * 20;


        const y =

            (e.clientY

                / window.innerHeight

                - 0.5) * 20;



        bgMoon.style.transform =

            `translate(

calc(-50% + ${x}px),

calc(-50% + ${y}px)

)`;


    }

);







/* =======================

FADE IN ON SCROLL

======================= */

const sections =

    document.querySelectorAll(

        "section"

    );



const observer =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (

                    entry.isIntersecting

                ) {

                    entry.target.style.opacity =

                        "1";


                    entry.target.style.transform =

                        "translateY(0)";

                }


            });

        },

        {

            threshold: 0.2

        }

    );




sections.forEach(section => {


    section.style.opacity = "0";

    section.style.transform =

        "translateY(60px)";


    section.style.transition =

        "1s ease";


    observer.observe(

        section

    );


});



console.log(

    "🌙 The Moon Chose You"

);
