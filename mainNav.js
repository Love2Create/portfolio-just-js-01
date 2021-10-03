function myFunc(){
    // console.log(h1);

    //add div for the mainNav container
    var mainNavDiv = document.createElement('div');
    mainNavDiv.setAttribute('class','mainNavDiv');
    mainNavDiv.setAttribute('id','mainNavContainer')
    document.body.appendChild(mainNavDiv);

    //add img for brand
    var logo = document.createElement('h1');
    logo.setAttribute('id','brand');
    logo.textContent = 'KAI CHEONG LU';
    mainNavDiv.appendChild(logo);
    
    // //add some text
    // var someText = document.createElement('p');
    // someText.textContent = 'Here are some text.';
    // document.querySelector('.mainNavDiv').appendChild(someText);

    //add UL for the li-links
    var mainNavUl = document.createElement('ul');
    mainNavUl.setAttribute('id','mainNavUl');
    mainNavDiv.appendChild(mainNavUl);

    //add li to mainNavUl
    // function addNavLinks(){
    //     var linkArray = ['home','contact','about'];
 
    //     for (var i=0; i<linkArray.length; i++){
    //         var portLink = linkArray[i];

    //         portLink = document.createElement('li');
    //         portLink.textContent = linkArray[i];
    //         mainNavUl.appendChild(portLink);
    //         console.log(portLink);
    //     }
    // }
    // addNavLinks();


    //add li to mainNavUl with object
   
    addNavLinks();
    loadMainContent();
}
window.onload = myFunc;


