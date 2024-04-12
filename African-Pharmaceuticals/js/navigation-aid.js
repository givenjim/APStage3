// Show/hide the scroll-to-top-bottom button based on scroll position
  window.onscroll = function () {
    showScrollButton();
  };

  function showScrollButton() {
    var button = document.getElementById("scroll-to-top-bottom");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
      updateScrollIcon();
    } else {
      button.style.display = "none";
    }
  }

  // Scroll to top or bottom function
  function scrollToTopBottom() {
    var scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    if (window.scrollY < scrollHeight / 2) {
      // If currently near the top, scroll to the bottom
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    } else {
      // If currently near the bottom, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    updateScrollIcon();
  }

  // Update scroll icon based on scroll position
  function updateScrollIcon() {
    var button = document.getElementById("scroll-to-top-bottom");
    var scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    if (window.scrollY < scrollHeight / 2) {
      // If currently near the top, show downward triangle
      button.innerHTML = '<span id="scroll-text"><i class="fa-solid fa-angles-down"></i></span> ';
    } else {
      // If currently near the bottom, show upward triangle
      button.innerHTML = '<span id="scroll-text"><i class="fa-solid fa-angles-up"></i></span> ';
    }
  }