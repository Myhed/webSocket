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
            container.oldContainerClicked.classList.remove('containerRoomDisplay')
            container.oldContainerClicked.classList.add('containerRoomHidde')
          }
          const containerClicked = document.getElementsByClassName(
            e.target.className + " container"
          )[0];
          containerClicked.classList.remove('containerRoomHidde')
          containerClicked.classList.add('containerRoomDisplay')
          container = { oldContainerClicked:containerClicked, label: e.target };
        },false);
    });
  }
};
