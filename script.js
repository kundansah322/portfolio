// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.innerHTML = "☀️";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        }
    });
}

// ===============================
// LIVE CLOCK
// ===============================

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);

    const time = now.toLocaleTimeString();

    clock.innerHTML = `📅 ${date} | 🕒 ${time}`;
}

setInterval(updateClock, 1000);
updateClock();


// ===============================
// WEATHER
// ===============================

// Replace YOUR_API_KEY with your OpenWeather API key

const API_KEY = "YOUR_API_KEY";

async function loadWeather() {

    const weather = document.getElementById("weather");

    if (!weather) return;

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=metric&appid=${API_KEY}`
        );

        const data = await response.json();

        weather.innerHTML =
            `🌤 ${data.name} | ${Math.round(data.main.temp)}°C | ${data.weather[0].main}`;

    } catch {

        weather.innerHTML = "Weather unavailable";

    }

}

loadWeather();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }

});


// ===============================
// SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    ".card, .skill-card, .project-card, .certificate-card, .info-box"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});


// ===============================
// SMOOTH BUTTON HOVER
// ===============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });

});


// ===============================
// PRELOADER (Optional)
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
