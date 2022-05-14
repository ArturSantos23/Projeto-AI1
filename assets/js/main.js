/* MENU*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("relogio").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // adiciona 0 aos numeros < 10
  return i;
}

var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
showSlides();
showSlides_Div();
showSlides_Footer();

function showSlides_Div() {
  var i;
  var slidesDiv = document.getElementsByClassName("home_information");
  for (i = 0; i < slidesDiv.length; i++) {
    slidesDiv[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slidesDiv.length) {
    slideIndex1 = 1;
  }
  slidesDiv[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides_Div, 5000); // Muda div de 5 em 5 segundos
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Muda imagem(Home) de 5 em 5 segundos
}

function showSlides_Footer() {
  var i;
  var slidesFooter = document.getElementsByClassName("footer");
  for (i = 0; i < slidesFooter.length; i++) {
    slidesFooter[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slidesFooter.length) {
    slideIndex3 = 1;
  }
  slidesFooter[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides_Footer, 5000); // Muda footer de 5 em 5 segundos
}

/*----- ANIMACOES -----*/
// INTRO OVERLAY
gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });

// SLIDER
gsap.from(".home_img", { opacity: 0, duration: 2, delay: 2, x: 60 });

// HOME
gsap.from(".home_information", { opacity: 0, duration: 3, delay: 2.3, y: 25 });
gsap.from(".anime-text", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.3,
});

// NAV ITENS
gsap.from(".nav_logo", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
});
gsap.from(".nav_item", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// SOCIAL
gsap.from(".home_social-icon", {
  opacity: 0,
  duration: 3,
  delay: 4,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// FOOTER
gsap.from(".footer", {
  opacity: 0,
  duration: 3,
  delay: 4,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
