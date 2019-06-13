window.onload = async function() {
  // Request server for get all rooms
  const rooms = JSON.parse(await request.getRequestFor("getAllRoom"));
  // active the label and the container room have the tag '/' TODO
  // display all room in the right container
  handleRooms.displayAllRooms(rooms)
  // Get only label (li)
  const roomLabel = document.querySelectorAll(".room");
  const labels = handleRooms.filterTypeElementByTagName(roomLabel, "li");
  console.log(labels)
  // set a listener for all label (li)
  handleRooms.whichRoomContainerDisplay(labels)
};
