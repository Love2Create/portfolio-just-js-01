function loadFooterNav(){

    var footerNavContainer = document.createElement('div');
    footerNavContainer.setAttribute('class','footerNavContainer');
    document.body.appendChild(footerNavContainer);

    function loadIconCard(){
        for(var i=0; i<cardObj.length; i++){
            var iconCardContainer = document.createElement('div');
            iconCardContainer.setAttribute('id',cardObj[i].id);
            iconCardContainer.setAttribute('class','iconCardContainer');
            footerNavContainer.appendChild(iconCardContainer);

            var iconContainer = document.createElement('img');
            iconContainer.setAttribute('class','iconContainer');
            iconContainer.setAttribute('src', cardObj[i].imgLink);
            iconCardContainer.appendChild(iconContainer);

            var iconText = document.createElement('p');
            iconText.setAttribute('class','iconText');
            iconText.textContent = cardObj[i].copyPoint;
            iconCardContainer.appendChild(iconText);
        }
    }
    loadIconCard();

}
