const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

// Email
let formSubmitted = document.getElementById("form");
function sendMail(params) {
  let tempParams = {
    name: document.getElementById("from-name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  formSubmitted.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send("service_gtovmhn", "template_wcu6yxb", tempParams)
      .then((res) => {
        console.log("success", res.status);
        console.log(tempParams);
      });
    formSubmitted.reset();
  });
}

navSlide();
