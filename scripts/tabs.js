function setTab(tabId) {
  console.log("tabId: " + tabId);
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
  console.log(tabContent);
  tabContent.forEach(function (tab) {
    tab.classList.remove("show");
  });

  // show tabId-content
  const currentContent = document.getElementById(tabId + "-content");
  console.log(currentContent);
  currentContent.classList.add("show");
}
