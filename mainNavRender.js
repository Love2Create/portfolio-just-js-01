function addNavLinks(){
    var linkObj = [
        {
        name:'Home',
        id: 'home'
        },
        {name:'About',
        id: 'about'
        },
        {name:'Contact',
        id: 'contact'
        },
    ]
    // console.log(linkObj);

    for (var i=0; i<linkObj.length; i++){
        var portLink = document.createElement('h2');
        portLink.textContent = linkObj[i].name;
        portLink.setAttribute('id', linkObj[i].id);
        portLink.setAttribute('href', linkObj[i].linkTo);
        mainNavDiv.appendChild(portLink);
    }

}