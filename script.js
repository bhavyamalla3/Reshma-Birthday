/* ================= MUSIC ================= */

const music = document.getElementById("birthdaySong");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

music.loop = true;
music.volume = 0.65;


/* ================= OPEN SURPRISE ================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

openBtn.addEventListener("click", function () {

    // Hide opening screen
    opening.classList.add("hide");

    // Start music after user interaction
    music.play()
        .then(() => {

            musicPlaying = true;
            musicBtn.innerHTML = "🔊";

        })
        .catch(() => {

            musicPlaying = false;
            musicBtn.innerHTML = "🎵";

        });

    // Start beautiful effects
    createPetals();
    createSparkles();

});


/* ================= MUSIC BUTTON ================= */

musicBtn.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "🎵";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;
                musicBtn.innerHTML = "🔊";

            })
            .catch(() => {

                musicBtn.innerHTML = "🎵";

            });

    }

});


/* ================= LETTER ================= */

const letter = `Happy Birthday! 🎂

On your special day, I just want to say how grateful I am to have a wonderful friend like you.

From our school days to where we are today, so many things have changed, but the beautiful memories we created will always remain special.

Thank you for all the laughter, kindness and beautiful memories we've shared together.

You are an amazing person, and I truly hope this year brings you happiness, success, good health and everything you've been wishing for.

Keep smiling, keep believing in yourself and never stop chasing your dreams.

May your birthday be filled with happiness, joy and unforgettable moments.

Happy Birthday once again, Reshma! ❤️`;

let letterIndex = 0;

const letterElement = document.getElementById("letterText");


function typeLetter() {

    if (letterIndex < letter.length) {

        const character = letter.charAt(letterIndex);

        if (character === "\n") {

            letterElement.innerHTML += "<br>";

        } else {

            letterElement.innerHTML += character;

        }

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}


/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll(
    ".memory, .single-memory, .photo-pair, .letter-section, .photo-grid, .quote-section, .final"
);

sections.forEach(section => {

    section.classList.add("fade-element");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");


                // Start letter when user reaches letter section
                if (
                    entry.target.classList.contains("letter-section") &&
                    letterIndex === 0
                ) {

                    typeLetter();

                }

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    observer.observe(section);

});


/* ================= FALLING PETALS ================= */

function createPetals() {

    // Prevent creating multiple intervals
    if (window.petalsStarted) return;

    window.petalsStarted = true;


    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (10 + Math.random() * 15) + "px";

        petal.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        document.body.appendChild(petal);


        setTimeout(() => {

            petal.remove();

        }, 15000);

    }, 900);

}


/* ================= SPARKLES ================= */

function createSparkles() {

    // Prevent multiple intervals
    if (window.sparklesStarted) return;

    window.sparklesStarted = true;


    setInterval(() => {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        document.body.appendChild(sparkle);


        setTimeout(() => {

            sparkle.remove();

        }, 800);

    }, 400);

}


/* ================= FINAL CELEBRATION ================= */

const celebrateBtn =
    document.getElementById("celebrateBtn");

const finalMessage =
    document.getElementById("finalMessage");


celebrateBtn.addEventListener("click", function () {

    // Show final message
    finalMessage.style.display = "block";


    // Confetti
    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.innerHTML =
            ["✨", "💖", "🎉", "🌸", "💕"]
            [Math.floor(Math.random() * 5)];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-30px";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.zIndex = "9999";

        piece.style.animation =
            `confettiFall ${3 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

});


/* ================= CONFETTI CSS ================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes confettiFall {

    to {

        transform:
        translateY(110vh)
        rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);
