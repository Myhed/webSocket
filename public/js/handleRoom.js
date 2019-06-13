const handleRooms = {
  defaultRoom: [],
  filterTypeElementByTagName: (HTMLelements, filteringCriterion) => {
    return Array.from(HTMLelements).filter(HTMLelement => {
        console.log()
      if (HTMLelement.localName === filteringCriterion) {
        return HTMLelement;
      }
    });
  },
  setDefaultRoomDisplayed: (room) => {
    handleRooms.defaultRoom.push(room)
  },
  getDefaultRoomDisplayed: () => {
      return handleRooms.defaultRoom
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
        handleRooms.defaultRoomDisplay(room)
      });
  },
  defaultRoomDisplay: room => {
    const roomLabel = handleRooms.filterTypeElementByTagName(document.getElementsByClassName('room '+room.name),"li")
    const roomContainer = handleRooms.filterTypeElementByTagName(document.getElementsByClassName('room '+ room.name),"div")
    if(room.tag === '/'){
        roomContainer[0].classList.add('containerRoomDisplay')
        roomLabel[0].classList.add('labelActive')
        handleRooms.setDefaultRoomDisplayed({roomLabel: roomLabel[0],roomContainer: roomContainer[0]})
    }else{
        roomLabel[0].classList.add('labelNotActive')
    }
  },
  whichRoomContainerDisplay: labels => {
    if (!Array.isArray(labels)) {
      return;
    }
    let container;
    labels.forEach(label => {
      label.addEventListener("click",e => {
          if(handleRooms.getDefaultRoomDisplayed().length){
            handleRooms.getDefaultRoomDisplayed()[0].roomContainer.classList.remove('containerRoomDisplay')
            handleRooms.getDefaultRoomDisplayed()[0].roomLabel.classList.remove('labelActive')
            handleRooms.getDefaultRoomDisplayed()[0].roomLabel.classList.add('labelNotActive')
            handleRooms.defaultRoom.pop()
          }
          if (typeof container !== "undefined") {
            container.oldContainerClicked.classList.remove('containerRoomDisplay')
            container.oldContainerClicked.classList.add('containerRoomHidde')
            container.oldLabel.classList.remove('labelActive')
            container.oldLabel.classList.add('labelNotActive')
          }
          const classNamePopped = e.target.className.split(' ')
          classNamePopped.pop()
          const containerClicked = document.getElementsByClassName(
            classNamePopped.join(' ') + " container"
          )[0]
          const labelClicked = e.target
          labelClicked.classList.remove('labelNotActive')
          labelClicked.classList.add('labelActive')
          containerClicked.classList.remove('containerRoomHidde')
          containerClicked.classList.add('containerRoomDisplay')
          container = { oldContainerClicked:containerClicked, oldLabel: labelClicked };
        },false);
    });
  }
};
