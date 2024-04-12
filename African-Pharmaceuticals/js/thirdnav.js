document.addEventListener("DOMContentLoaded", function () {
  var articlesLink = document.getElementById("articles-link");
  var newsLink = document.querySelector(".news-link"); // Select the "News" link
  var thirdNav = document.querySelector(".third-nav");

  // Show the third navbar on hover over articlesLink or newsLink
  articlesLink.addEventListener("mouseover", function () {
    thirdNav.classList.add("hovered");
  });

  newsLink.addEventListener("mouseover", function () {
    thirdNav.classList.add("hovered");
  });

  // Keep the third navbar visible when hovering over itself
  thirdNav.addEventListener("mouseover", function () {
    thirdNav.classList.add("hovered");
  });

  // Hide the third navbar on mouseout from document
  document.addEventListener("mouseout", function () {
    thirdNav.classList.remove("hovered");
  });
});
