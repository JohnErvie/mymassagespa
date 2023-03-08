// Get all tabs
var tabs = document.querySelectorAll(".tab");

// Get all tab content panes
var tabPanes = document.querySelectorAll(".tab-pane");

// Get progress bar indicator
var indicator = document.querySelector(".indicator");

// Add click event listener to each tab
tabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    // Remove active class from all tabs
    tabs.forEach(function(tab) {
      tab.classList.remove("active");
    });

    // Add active class to clicked tab
    this.classList.add("active");

    // Get the id of the clicked tab
    var tabId = this.id;

    // Remove active class from all tab content panes
    tabPanes.forEach(function(tabPane) {
      tabPane.classList.remove("active");
    });

    // Add active class to the corresponding tab content pane
    var tabPane = document.getElementById(tabId + "-content");
    tabPane.classList.add("active");

    // Update the width of the progress bar indicator
    indicator.style.width = this.dataset.progress + "%
