const handleRooms = {
  filterOneTypeElement: (HTMLelements, filteringCriterion) => {
    return Array.from(HTMLelements).filter(HTMLelement => {
      if (HTMLelement.className.split(" ").length === filteringCriterion) {
        return HTMLelement;
      }
    });
  },
  whatRoomContainerDisplay: labels => {
    if (!Array.isArray(labels)) {
      return;
    }
    let container;
    labels.forEach(label => {
      label.addEventListener("click",e => {
          if (typeof container !== "undefined") {
            container.containerClicked.style.zIndex = "0";
          }
          const containerClicked = document.getElementsByClassName(
            e.target.className + " container"
          )[0];
          containerClicked.style.zIndex = "10000";
          container = { containerClicked, label: e.target };
        },false);
    });
    return container;
  }
};
