// stricky header

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a.scroll-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


/*document.getElementById('cta-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          form.reset();
          // Mostrar la ventana emergente de confirmación
          alert("¡Gracias! El formulario ha sido enviado con éxito.");
      } else {
          response.json().then(data => {
              if (data.errors) {
                  alert(data.errors.map(error => error.message).join(", "));
              } else {
                  alert("Oops! Hubo un problema al enviar el formulario");
              }
          });
      }
  }).catch(error => {
      alert("Oops! Hubo un problema al enviar el formulario");
  });
});*/
