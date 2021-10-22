function loadFooterNav(){

    var footerNavContainer = document.createElement('div');
    footerNavContainer.setAttribute('class','footerNavContainer');
    document.body.appendChild(footerNavContainer);

    function loadIconCard(index){
        footerNavContainer.innerHTML='';

        for(var i=0; i<cardObj.length; i++){

            if(index != i){

                var iconCardContainer = document.createElement('div');
            
                // iconCardContainer.setAttribute('id',cardObj[i].id);
                iconCardContainer.setAttribute('class','iconCardContainer');
                footerNavContainer.appendChild(iconCardContainer);
    
                var iconContainer = document.createElement('img');
                iconContainer.setAttribute('class','iconContainer');
                iconContainer.setAttribute('src', cardObj[i].imgLink);
                iconContainer.setAttribute('id',cardObj[i].id);
                iconCardContainer.appendChild(iconContainer);
                
                
                iconContainer.addEventListener('click', function(e){
                    var newIndex = e.target.id - 1;
                    loadIconCard(newIndex);
                });
    
                var iconText = document.createElement('p');
                iconText.setAttribute('class','iconText');
                iconText.textContent = cardObj[i].copyPoint;
                iconCardContainer.appendChild(iconText);

            }

        }
    }
    loadIconCard();

    // for(var j=0; j<cardObj.length; j++){
    //     iconCardContainer.getElementById(j).addEventListener('click', function(e){
    //         console.log(e);
    //     })
    // }
}