function renderForm(){
    // console.log('hello');
    var divEl = document.querySelector('.mainContentArea').appendChild(createDomElement('form', {action: "mailto:you@yourdmainhere.com", method: "post", enctype:"text/plain"}));
    var formH3 = divEl.appendChild(createDomElement('h3'));
    formH3.textContent = "CONTACT ME";
    var formP = divEl.appendChild(createDomElement('p'));
    formP.textContent = 'Please complete the form below';

    for(var i=0; i<contactObj.length; i++){
        
        // add div that contains each form element set
        var formElDiv = divEl.appendChild(createDomElement('div'));

        //loop through the objects in each element of the array
        for(var j=0; j<contactObj[i].length; j++){

            if (contactObj[i][j].type== 'label'){
                var labelEl = formElDiv.appendChild(createDomElement('label',contactObj[i][j].attr));
                labelEl.textContent = contactObj[i][j].text

            }
            if (contactObj[i][j].type == 'input'){
                formElDiv.appendChild(createDomElement('input',contactObj[i][j].attr))
            }
        }
    }  

    var resetBtn = divEl.appendChild(createDomElement('button', {type: 'reset', value: 'Reset'}));
    resetBtn.textContent = 'Reset';
    
    var subBtn = divEl.appendChild(createDomElement('button', {type: 'submit', value: 'Submit'}));
    subBtn.textContent = 'Submit';
}