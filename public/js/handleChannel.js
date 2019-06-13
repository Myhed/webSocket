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
      channelContainer[0].classList.add('containerchannelDisplay')
      channelLabel[0].classList.add('labelActive')
      handlechannels.setDefaultchannelDisplayed({ channelLabel: channelLabel[0], channelContainer: channelContainer[0] })
    } else {
      channelLabel[0].classList.add('labelNotActive')
    }
  },
  whichChannelContainerDisplay: labels => {
    if (!Array.isArray(labels)) {
      return;
    }
    let container;
    labels.forEach(label => {
      label.addEventListener("click", e => {
        if (handlechannels.getDefaultchannelDisplayed().length) {
          handlechannels.getDefaultchannelDisplayed()[0].channelContainer.classList.remove('containerchannelDisplay')
          handlechannels.getDefaultchannelDisplayed()[0].channelLabel.classList.remove('labelActive')
          handlechannels.getDefaultchannelDisplayed()[0].channelLabel.classList.add('labelNotActive')
          handlechannels.defaultchannel.pop()
        }
        if (typeof container !== "undefined") {
          container.oldContainerClicked.classList.remove('containerchannelDisplay')
          container.oldContainerClicked.classList.add('containerchannelHidde')
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
        containerClicked.classList.remove('containerchannelHidde')
        containerClicked.classList.add('containerchannelDisplay')
        container = { oldContainerClicked: containerClicked, oldLabel: labelClicked };
      }, false);
    });
  }
};
