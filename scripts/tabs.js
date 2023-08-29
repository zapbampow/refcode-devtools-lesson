function setTab(tabId) {
  // remove active class from all tabs
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // add active class to tabId
  var tab = document.getElementById(tabId);
  tab.classList.add("active");

  // hide all tab-content
  var tabContent = document.querySelectorAll(".tab-content");
  tabContent.forEach(function (tab) {
    tab.classList.remove("show");
  });

  // show tabId-content
  const currentContent = document.getElementById(tabId + "-content");
  currentContent.classList.add("show");

  // set bugs tab in local storage when at /bugs.html
  if (window.location.pathname === "/bugs.html") {
    localStorage.setItem("bugsTab", tabId);
  }
}
