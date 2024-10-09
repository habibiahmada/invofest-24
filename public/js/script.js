document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownNavbarLink");
  const dropdownMenu = document.getElementById("dropdownNavbar");
  const arrowIcon = document.getElementById("arrowIcon");

  // Function to toggle dropdown and arrow rotation
  function toggleDropdown() {
    if (dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden");
      arrowIcon.classList.add("rotate-180");
    } else {
      dropdownMenu.classList.add("hidden");
      arrowIcon.classList.remove("rotate-180");
    }
  }

  if (dropdownMenu) {
    // Event listener for document click
    document.addEventListener("click", function (event) {
      if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
        arrowIcon.classList.remove("rotate-180");
      }
    });
  }

  // Event listener for dropdown button
  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from propagating to document click listener
    toggleDropdown();
  });
});
