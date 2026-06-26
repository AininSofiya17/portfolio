// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });

    });
});

// ===============================
// Sticky Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ===============================
// Reveal Animation on Scroll
// ===============================

const reveals = document.querySelectorAll(
    ".card, .project-card, .timeline div, .contact"
);

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach(element=>{

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(element=>{

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Typing Effect
// ===============================

const text = "Software Engineering Student";
const typingElement = document.querySelector(".home-content h2");

let i = 0;

typingElement.textContent = "";

function typing(){

    if(i < text.length){

        typingElement.textContent += text.charAt(i);

        i++;

        setTimeout(typing,80);

    }

}

typing();

// ===============================
// Scroll to Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

const slides = document.querySelectorAll(".phone-screen .slide");

let current = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

document.getElementById("nextBtn").onclick=()=>{

current++;

if(current>=slides.length)

current=0;

showSlide(current);

}

document.getElementById("prevBtn").onclick=()=>{

current--;

if(current<0)

current=slides.length-1;

showSlide(current);

}