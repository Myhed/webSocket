const handleRooms = {
  filterOneTypeElement: (HTMLelements, filteringCriterion) => {
    return Array.from(HTMLelements).filter(HTMLelement => {
      if (HTMLelement.className.split(" ").length === filteringCriterion) {
        return HTMLelement;
      }
    });
  },
  displayAllRooms: rooms => {
    const labelContainer = document.querySelector("#rooms");
    const containerRooms = document.querySelector("#container-message");
    rooms.forEach(room => {
        const li = handleDom.createAndFillElement("li", room.name, [
          { type: "class", name: "room " + room.name }
        ]);
        const containerRoom = handleDom.createAndFillElement("div","text "+ room.name, [
          { type: "class", name: "room " + room.name + " container" }
        ]);
        labelContainer.appendChild(li);
        containerRooms.appendChild(containerRoom);
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
