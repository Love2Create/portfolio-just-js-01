function loadAbout(){
    for (var i=0; i<aboutObj.length; i++){
        if(aboutObj[i].type == 'img'){
           var elImg = document.querySelector('.mainContentArea')
           elImg.appendChild(createDomElement('img', aboutObj[i].attr));
        }
        if(aboutObj[i].type == 'h3'){
            var elH3 = document.querySelector('.mainContentArea').appendChild(createDomElement(aboutObj[i].type,aboutObj[i].attr));
            elH3.textContent = aboutObj[i].title;
        }
        if(aboutObj[i].type == 'p'){
            var elP = document.querySelector('.mainContentArea').appendChild(createDomElement(aboutObj[i].type, aboutObj[i].attr));
            elP.textContent = aboutObj[i].copy;
        }
    }

}