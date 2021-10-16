function renderForm(){
    for(var i=0; i<contactObj.length; i++){
        var formEl = document.querySelector('.mainContentArea');
        for(var j=o; j<contactObj[i].type.length; j++){
            if (contactObj[i].type[j]== 'label'){
                formEl.appendChild(createDomElement(attr.type[j]));
                formEl.textContent = contactObj[i].labelCopy;
        }
    }
}