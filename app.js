//selectors

var Tab = document.querySelectorAll(".tab");
var TabContent = document.querySelectorAll(".tab-content");

//functions
const showTab = (Index) => {

    
  Tab.forEach((node) => {
    node.style.backgroundColor = "";
    node.style.Color = "";
  });

  Tab[Index].style.backgroundColor = 'rgba(24, 111, 72, 0.539)';
  Tab[Index].style.color = "white";

  TabContent.forEach((node) => {
    node.style.display = "none";
  });
  TabContent[Index].style.display = "block";
};

//default 1st Tab
showTab(0)