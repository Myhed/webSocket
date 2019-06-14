const handleDom = {
  createAndFillElement: (htmlElement, text, attributes = [{}]) => {
    const elementCreated = document.createElement(htmlElement);
    if (text.length) {
      const textNode = document.createTextNode(text);
      elementCreated.appendChild(textNode);
    }
    if (attributes.length) {
      attributes.forEach(attribute => {
        elementCreated.setAttribute(attribute.type, attribute.name);
      });
    }
    return elementCreated;
  },
  removeOrAddClass: (HTMLelement, classNames) => {
    classNames = Object.assign({ remove: "", add: "" }, classNames);
    const keysIsArrays = Object.keys(classNames).filter(className =>
      Array.isArray(classNames[className])
    );
    keysIsArrays.forEach(keyIsArray => {
      if (keyIsArray === "remove") {
        classNames[keyIsArray].forEach(removeClass => {
          HTMLelement.classList.remove(removeClass);
        });
      } else {
        classNames[keyIsArray].forEach(addClass => {
          HTMLelement.classList.add(addClass);
        });
      }
      return elementCreated;
    });
    if (typeof classNames.remove === "string" && classNames.remove.length && !classNames.add.length) {
      HTMLelement.classList.remove(classNames.remove);
      return;
    } else if (typeof classNames.add === "string" && classNames.add.length && !classNames.remove.length) {
      HTMLelement.classList.add(classNames.add);
      return;
    } else if (typeof classNames.remove === "string" && typeof classNames.add === "string" && classNames.add.length &&classNames.remove.length) {
      HTMLelement.classList.remove(classNames.remove);
      HTMLelement.classList.add(classNames.add);
      return;
    } else {
      return false;
    }
  },
  deepNameClass: (className, deep = 2) => {
    className = className.split(" ");
    while (className.length !== deep) {
      className.pop();
    }
    return className.join(" ");
  }
};
