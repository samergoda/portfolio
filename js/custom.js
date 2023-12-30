import data from "./projects.js";

console.log(data);

(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  const owlCarouselContainer = $(".owl-carousel.owl-theme");

  owlCarouselContainer.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  data.forEach((project) => {
    const projectItem = `
      <div class="item">
        <div class="project-info">
        
          <img src=${project.img} class="img-fluid" alt=${project.name} />
        
          <a href=${project.link} class='  project-name'>${project.name}</a>
          <span class='  project-tech'>${project.tecnology}</span>
        </div>
      </div>
    `;

    owlCarouselContainer.trigger("add.owl.carousel", [$(projectItem)]);
  });

  // Refresh Owl Carousel to display added items
  owlCarouselContainer.trigger("refresh.owl.carousel");

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
