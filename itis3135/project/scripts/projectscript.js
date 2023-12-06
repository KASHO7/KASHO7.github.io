document.addEventListener("DOMContentLoaded", function () {
  // JavaScript Implementation (Hover Effect)
  const serviceSections = document.querySelectorAll("section");

  serviceSections.forEach((section) => {
    section.addEventListener("mouseover", function () {
      this.style.border = "2px solid #3498db";
    });

    section.addEventListener("mouseout", function () {
      this.style.border = "none";
    });
  });

  // jQuery-UI Widget (Accordion)
  $("#accordion-financial, #accordion-controls, #accordion-risk").accordion({
    heightStyle: "content",
    collapsible: true,
  });

  // jQuery Plugin 1 (Owl Carousel)
  $(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });
  });

  // jQuery Plugin 3 (Form Validation)
  $("form#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: "Name must be at least 2 characters.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      message: {
        required: "Please enter a message.",
        minlength: "Message must be at least 10 characters.",
      },
    },
  });
});
