function loadMainContent(){

    var mainContentArea = document.createElement('div');
    mainContentArea.setAttribute('class','mainContentArea');
    document.body.appendChild(mainContentArea);


    function loadCards(){  

        //cardObj



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


    for(var i=1; i<cardObj.length+1; i++){
        document.getElementById(i).addEventListener('click', function(e){
        document.querySelector('.mainContentArea').innerHTML = e.target.id;
        console.log(e.target.id);
        });
    }
}