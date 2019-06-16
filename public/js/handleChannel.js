const handlechannels = {
  defaultchannel: [],
  filterTypeElementByTagName: (HTMLelements, filteringCriterion) => {
    return Array.from(HTMLelements).filter(HTMLelement => {
      if (HTMLelement.localName === filteringCriterion) {
        return HTMLelement;
      }
    });
  },
  setDefaultchannelDisplayed: (channel) => {
    handlechannels.defaultchannel.push(channel)
  },
  removeDefaultChannelDisplayed: () => {
    if (handlechannels.getDefaultchannelDisplayed().length) {
      handleDom.removeOrAddClass(handlechannels.getDefaultchannelDisplayed()[0].channelContainer,{remove:"containerChannelDisplay"})
      handleDom.removeOrAddClass(handlechannels.getDefaultchannelDisplayed()[0].channelLabel,{remove:"labelActive",add:"labelNotActive"})
      handlechannels.defaultchannel.pop()
    }
    return;
  },
  getDefaultchannelDisplayed: () => {
    return handlechannels.defaultchannel
  },
  displayAllchannels: channels => {
    const labelContainer = document.querySelector("#channels");
    const containerchannels = document.querySelector("#container-message");
    channels.forEach(channel => {
      const li = handleDom.createAndFillElement("li", channel.name, [
        { type: "class", name: "channel " + channel.name }
      ]);
      const containerchannel = handleDom.createAndFillElement("div", "channel " + channel.name, [
        { type: "class", name: "channel " + channel.name + " container" }
      ]);
      labelContainer.appendChild(li);
      containerchannels.appendChild(containerchannel);
      handlechannels.defaultchannelDisplay(channel)
    });
  },
  defaultchannelDisplay: channel => {
    const channelLabel = handlechannels.filterTypeElementByTagName(document.getElementsByClassName('channel ' + channel.name), "li")
    const channelContainer = handlechannels.filterTypeElementByTagName(document.getElementsByClassName('channel ' + channel.name), "div")
    if (channel.tag === '/') {
      channelContainer[0].classList.add('containerChannelDisplay')
      channelLabel[0].classList.add('labelActive')
      handlechannels.setDefaultchannelDisplayed({ channelLabel: channelLabel[0], channelContainer: channelContainer[0] })
      handleSocket.whichChannelToConnect(Object.assign(channel,{rootNameClass: handleDom.deepNameClass(channelLabel[0].className)}),0)
    } else {
      channelLabel[0].classList.add('labelNotActive')
    }
  },
  whichChannelContainerDisplay:(labels,channels) => {
    if (!Array.isArray(labels)) {
      return;
    }
    let container;
    labels.forEach((label,index) => {
      label.addEventListener("click", e => {
        const rootNameClass = handleDom.deepNameClass(e.target.className)
        handleSocket.whichChannelToConnect(Object.assign(channels[index],{rootNameClass: rootNameClass}),index)
        handlechannels.removeDefaultChannelDisplayed()
        if (typeof container !== "undefined") {
          handleDom.removeOrAddClass(container.oldContainerClicked,{remove:"containerChannelDisplay",add:"containerChannelHidde"})
          handleDom.removeOrAddClass(container.oldLabel,{remove:"labelActive",add:"labelNotActive"})
        }
        const containerClicked = document.getElementsByClassName(
          rootNameClass + " container"
        )[0]
        const labelClicked = e.target
        handleDom.removeOrAddClass(labelClicked,{remove:"labelNotActive",add:"labelActive"})
        handleDom.removeOrAddClass(containerClicked,{remove:"containerChannelHidde",add:"containerChannelDisplay"})
        
        container = { oldContainerClicked: containerClicked, oldLabel: labelClicked };
      }, false);
    });
  }
};
