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
            iconCardContainer.addEventListener('click', function(e){
                // console.log(e);

                var targetIndex = e.target-1;
                var mainContentAreaContent = document.querySelector('.mainContentArea');
                mainContentAreaContent.innerHTML = ""; 

                // for (var j=0; j<indPieceObj.length; j++){
                //     if(indPieceObj)
                // }
                
                e.target.parentNode.remove();
            });

            var iconText = document.createElement('p');
            iconText.setAttribute('class','iconText');
            iconText.textContent = cardObj[i].copyPoint;
            iconCardContainer.appendChild(iconText);
        }
    }
    loadIconCard();


    // for(var j=1; j<cardObj.length+1; j++){
    //     document.getElementById(j).addEventListener('click', function(e){

    //         console.log(e);

    //         var targetIndex = e.target.id-1;

    //         mainContentArea.innerHTML = '';
    //         for(var i=0; i<indPieceObj[targetIndex].length; i++){
    //             // console.log(indPieceObj[targetIndex][i]);
    //             if(indPieceObj[targetIndex][i].type == 'h1'){
    //                  var newTitle = mainContentArea.appendChild(createDomElement(indPieceObj[targetIndex][i].type));
    //                  newTitle.setAttribute('class',indPieceObj[targetIndex][i].textClass);
    //                  newTitle.textContent = indPieceObj[targetIndex][i].copy;
    //             }
    //             if(indPieceObj[targetIndex][i].type == 'img'){
    //                  var newImg = mainContentArea.appendChild(createDomElement(indPieceObj[targetIndex][i].type));
    //                  newImg.setAttribute('class', indPieceObj[targetIndex][i].imgClass);
    //                  newImg.setAttribute('src', indPieceObj[targetIndex][i].imgSrc);
    //             }
    //         } 
            
    //         var removeFromFootNav = document.getElementById(targetIndex+1);
    //         // console.log(removeFromFootNav);
    //         removeFromFootNav.remove();   

    //     });
    // }

}
