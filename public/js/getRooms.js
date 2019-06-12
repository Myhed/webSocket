window.onload = function(){
    const req = new XMLHttpRequest();

    req.open('GET','http://localhost:8080/getAllRoom', false)
    req.send(null)
    const divRooms = document.querySelector('#rooms');
    const containerRooms = document.querySelector('#container-message');
    const rooms = JSON.parse(req.responseText)
    rooms.forEach(room => {
        const textNode = document.createTextNode(room)
        const li = document.createElement('li');
        const containerRoom = document.createElement('div');
        containerRoom.setAttribute('class','room '+room + ' container')
        li.setAttribute('class','room '+room)
        li.appendChild(textNode)
        divRooms.appendChild(li)
        containerRooms.appendChild(containerRoom)
    });

    const roomLabel = document.querySelectorAll('.room')
    const labels = Array.from(roomLabel).filter((HTMLelement) => {
        if(HTMLelement.className.split(' ').length === 2){
            return HTMLelement;
        }
    })
    let container
    labels.forEach(label => {
        label.addEventListener('click',(e) => {
            if(typeof container !== "undefined"){
                container.containerClicked.style.zIndex = "0"
                container.label.style.background = "#ccc"
            }
            const containerClicked = document.getElementsByClassName(e.target.className+' container')[0]
            containerClicked.style.zIndex = "10000"
            e.target.style.background = "#fff"
            container = {containerClicked,label:e.target}
        },false)
    })
}