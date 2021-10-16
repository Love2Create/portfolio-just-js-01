function loadMainContent(){

    var mainContentArea = document.createElement('div');
    mainContentArea.setAttribute('class','mainContentArea');
    document.body.appendChild(mainContentArea);


    function loadCards(){  

        for (var i=0; i<cardObj.length; i++){
            var cardClassNames = cardObj[i].cardClassName;
            var imgClassNames = cardObj[i].imgClassName;
            var imgLinks = cardObj[i].imgLink;
            var CopyPoints = cardObj[i].copyPoint;
            var ids = cardObj[i].id;

            var cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', cardClassNames);


            var imgSqContainer = document.createElement('img');
            imgSqContainer.setAttribute('id', ids);
            imgSqContainer.setAttribute('class', imgClassNames);
            imgSqContainer.setAttribute('src', imgLinks);

            var pContainer = document.createElement('p');
            pContainer.setAttribute('class', CopyPoints);
            pContainer.textContent = CopyPoints;
            
            mainContentArea.appendChild(cardContainer);
            cardContainer.appendChild(imgSqContainer);
            cardContainer.appendChild(pContainer);
        }  
        
    }

        
    loadCards();

    for(var j=1; j<cardObj.length+1; j++){
        document.getElementById(j).addEventListener('click', function(e){

            var targetIndex = e.target.id-1;

            mainContentArea.innerHTML = '';
            for(var i=0; i<indPieceObj[targetIndex].length; i++){
                // console.log(indPieceObj[targetIndex][i]);
                if(indPieceObj[targetIndex][i].type == 'h1'){
                     var newTitle = mainContentArea.appendChild(createDomElement(indPieceObj[targetIndex][i].type));
                     newTitle.setAttribute('class',indPieceObj[targetIndex][i].textClass);
                     newTitle.textContent = indPieceObj[targetIndex][i].copy;
                }
                if(indPieceObj[targetIndex][i].type == 'img'){
                     var newImg = mainContentArea.appendChild(createDomElement(indPieceObj[targetIndex][i].type));
                     newImg.setAttribute('class', indPieceObj[targetIndex][i].imgClass);
                     newImg.setAttribute('src', indPieceObj[targetIndex][i].imgSrc);
                }
            } 
            
            var removeFromFootNav = document.getElementById(targetIndex+1);
            // console.log(removeFromFootNav);
            removeFromFootNav.remove();   

        });
    }


}