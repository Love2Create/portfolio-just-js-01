function addNavLinks(){
    var linkObj = [
        {
        name:'Home',
        linkTo:'http://www.google.com'
        },
        {name:'About',
        linkTo:'http://www.yahoo.com'
        },
        {name:'Contact',
        linkTo:'http://www.yahoo.com'
        },
    ]
    console.log(linkObj);

    for (var i=0; i<linkObj.length; i++){
        var portLink = linkObj[i].linkTo;
        var portLinkName = linkObj[i].Name;

        portLink = document.createElement('a');
        portLink.setAttribute('href', linkObj[i].linkTo);
        portLinkName = document.createElement('li');
        portLink.textContent = linkObj[i].name;
        mainNavUl.appendChild(portLink)
        mainNavUl.appendChild(portLinkName);
    }
}
