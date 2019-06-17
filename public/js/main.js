window.onload = async function() {
  const name = prompt("Saissez votre pseudo");
  if(name != null){
    user.setNameUser(name)
    // Request server for get all channels
    const channels = JSON.parse(await request.getRequestFor("getAllchannel"));
    // display all channel in the right container
    handlechannels.displayAllchannels(channels)
    // Get only label (li)
    const channelLabel = document.querySelectorAll(".channel");
    const labels = handlechannels.filterTypeElementByTagName(channelLabel, "li");
    console.log(channels)
    // set a listener for all label (li)
    handlechannels.whichChannelContainerDisplay(labels,channels)
    user.removeUserToTheList()
    // handleInput
    handleInput.sendInput();
  }else{
    alert('vous ne pouvez pas vous connecter au chat si vous n avez pas de pseudo')
  }
};
