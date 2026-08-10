/* ================= MUSIC ================= */

const music = new Audio("music/hey-rangule.mp3");

music.loop = true;
music.volume = 0.65;

let musicPlaying = false;


/* ================= OPEN SURPRISE ================= */

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", function(){

    const opening = document.getElementById("opening");
    const website = document.getElementById("website");

    opening.classList.add("hide");

    setTimeout(() => {

        website.classList.add("show");

    },500);


    /* Start song after user interaction */

    music.play()
    .then(() => {

        musicPlaying = true;

        document.getElementById("musicBtn").innerHTML = "🔊";

    })
    .catch(() => {

        document.getElementById("musicBtn").innerHTML = "🎵";

    });


    createPetals();

    createSparkles();

});


/* ================= MUSIC BUTTON ================= */

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function(){

    if(musicPlaying){

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "🎵";

    }else{

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

    }

});


/* ================= LETTER TYPEWRITER ================= */

const letter = `Happy Birthday! 🎂

On your special day, I just want to say how grateful I am to have a wonderful friend like you.

Thank you for all the laughter, kindness and beautiful memories we've shared together.

You are an amazing person, and I truly hope this year brings you happiness, success, good health and everything you've been wishing for.

Keep smiling, keep believing in yourself and never stop chasing your dreams.

May your birthday be filled with love, joy and unforgettable moments.

Happy Birthday once again! ❤️`;


let letterIndex = 0;

const letterElement = document.getElementById("letterText");


function typeLetter(){

    if(letterIndex < letter.length){

        letterElement.innerHTML +=
            letter.charAt(letterIndex) === "\n"
            ? "<br>"
            : letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,35);

    }

}


/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll(
    ".memory, .single-memory, .photo-pair, .letter-section, .photo-grid, .quote-section, .final"
);

sections.forEach(section => {

    section.classList.add("fade-element");

});


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

            if(entry.target.classList.contains("letter-section")){

                if(letterIndex === 0){

                    typeLetter();

                }

            }

        }

    });

},{
    threshold:.15
});


sections.forEach(section => {

    observer.observe(section);

});


/* ================= FALLING PETALS ================= */

function createPetals(){

    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (10 + Math.random()*15) + "px";

        petal.style.animationDuration =
            (7 + Math.random()*7) + "s";

        document.body.appendChild(petal);


        setTimeout(() => {

            petal.remove();

        },15000);

    },900);

}


/* ================= SPARKLES ================= */

function createSparkles(){

    setInterval(() => {

        const sparkle =
            document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            Math.random()*100 + "vw";

        sparkle.style.top =
            Math.random()*100 + "vh";

        document.body.appendChild(sparkle);


        setTimeout(() => {

            sparkle.remove();

        },800);

    },400);

}


/* ================= FINAL CELEBRATION ================= */

document.getElementById("celebrateBtn")
.addEventListener("click", function(){

    const finalMessage =
        document.getElementById("finalMessage");

    finalMessage.style.display = "block";


    /* Confetti */

    for(let i=0;i<80;i++){

        const piece =
            document.createElement("div");

        piece.innerHTML =
            ["✨","💖","🎉","🌸","💕"]
            [Math.floor(Math.random()*5)];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random()*100 + "vw";

        piece.style.top =
            "-30px";

        piece.style.fontSize =
            (15+Math.random()*20)+"px";

        piece.style.zIndex = "9999";

        piece.style.animation =
            `confettiFall ${3+Math.random()*3}s linear forwards`;

        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        },6000);

    }

});


/* ================= CONFETTI CSS ================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes confettiFall{

    to{

        transform:
        translateY(110vh)
        rotate(720deg);

        opacity:0;

    }

}

`;

document.head.appendChild(style);