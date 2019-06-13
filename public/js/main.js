window.onload = async function() {
  // Request server for get all rooms
  const rooms = JSON.parse(await request.getRequestFor("getAllRoom"));
  // Get container for append html
  const divRooms = document.querySelector("#rooms");
  const containerRooms = document.querySelector("#container-message");
  // display all room in the right container
  console.log(rooms);
  rooms.forEach(room => {
    const li = handleDom.createAndFillElement("li", room.name, [
      { type: "class", name: "room " + room.name }
    ]);
    const containerRoom = handleDom.createAndFillElement("div","", [
      { type: "class", name: "room " + room.name + " container" }
    ]);
    divRooms.appendChild(li);
    containerRooms.appendChild(containerRoom);
  });
  // Get only label (li)
  const roomLabel = document.querySelectorAll(".room");
  const labels = handleRooms.filterOneTypeElement(roomLabel, 2);
  // set a listener for all label (li)
  handleRooms.whatRoomContainerDisplay(labels)
};
