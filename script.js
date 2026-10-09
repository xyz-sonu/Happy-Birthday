/* =====================================
   SONALII'S BIRTHDAY SURPRISE
   JavaScript: interactions and effects
===================================== */

// 1. Switch between website screens

function goToScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 2. Countdown: 3, 2, 1, SURPRISE!

function startCountdown() {
    goToScreen("countdown");

    const number = document.getElementById("count-number");

    let count = 3;

    number.textContent = count;
    number.classList.remove("surprise-text");

    const timer = setInterval(function () {
        count--;

        if (count > 0) {
            number.textContent = count;

            // Replay the number animation
            number.style.animation = "none";
            void number.offsetWidth;
            number.style.animation = "";
        } else {
            clearInterval(timer);

            number.textContent = "SURPRISE!";
            number.classList.add("surprise-text");

            setTimeout(function () {
                goToScreen("question");
            }, 1100);
        }
    }, 950);
}


// 3. The playful NO button

function sayNo() {
    const message = document.getElementById("no-message");

    message.textContent =
        "అబ్బా, భలే బిల్డప్ ఇస్తావే! త్వరగా చూడు 😭💗";

    // Let her continue after the teasing message
    setTimeout(function () {
        if (document.getElementById("question").classList.contains("active")) {
            showPhotos();
        }
    }, 1900);
}


// 4. Reveal the photo gallery

function showPhotos() {
    goToScreen("photos");
}


// 5. Allow photos to be selected from the device

function loadPhoto(event, photoNumber) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("photo" + photoNumber).src =
            e.target.result;
    };

    reader.readAsDataURL(file);
}


// 6. Your complete birthday message

const birthdayMessage = [
    "Happy Birthday to the one person who somehow manages to be chaotic, amazing, and annoyingly good-looking all at once",

    "You seriously deserve all the good things today .... cake, laughter, attention (which you obviously love), and maybe a little peace from my teasing… but only for today",

    "Thanks for being my favorite person to roast, rant to, and randomly vibe with. You make everything more fun... even the boring parts.",

    "Don’t change too much this year ...... just enough to stay mysterious but not enough to make me jealous of your glow-up",

    "You’re beautiful .... not just in the “you look good in every picture” way, but in the way your presence makes everything lighter. You make people laugh, you care even when you pretend not to, and you somehow balance being sweet and sarcastic like it’s an art form",

    "And if I’m being honest, there’s something about you that always gets my attention ... the way you talk, the way you react, the way you roll your eyes but still smile right after."
];


// 7. Display the message one paragraph at a time

function showLetter() {
    goToScreen("letter");

    const card = document.getElementById("letter-card");

    // Clear the card before adding the message
    card.innerHTML = "";

    birthdayMessage.forEach(function (paragraph, index) {
        const p = document.createElement("p");

        p.textContent = paragraph;

        card.appendChild(p);

        // Reveal each paragraph with a gentle delay
        setTimeout(function () {
            p.classList.add("visible");
        }, 250 + index * 750);
    });

    // A subtle sign-off, without a direct confession
    const signoff = document.createElement("div");

    signoff.className = "signoff";
    signoff.textContent =
        "— from someone who enjoys annoying you ♡";

    card.appendChild(signoff);

    setTimeout(function () {
        signoff.classList.add("visible");
    }, 250 + birthdayMessage.length * 750);
}


// 8. Reveal the final birthday screen

function showFinal() {
    goToScreen("finale");
}


// 9. Restart the whole experience

function restart() {
    goToScreen("intro");

    const number = document.getElementById("count-number");

    number.textContent = "3";
    number.classList.remove("surprise-text");

    document.getElementById("no-message").textContent = "";
}


// 10. Create floating hearts and sparkles

function createFloatingHearts() {
    const container = document.getElementById("floating-hearts");

    const symbols = ["♡", "♥", "✦", "✧"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "heart";

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            (9 + Math.random() * 12) + "s";

        heart.style.animationDelay =
            (-Math.random() * 15) + "s";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        container.appendChild(heart);
    }
}


// Start the background animation

createFloatingHearts();