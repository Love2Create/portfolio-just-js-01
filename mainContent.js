//
function loadMainContent(){

    var mainContentArea = document.createElement('div');
    mainContentArea.setAttribute('class','mainContentArea');
    document.body.appendChild(mainContentArea);


    function loadCards(){  

        //cardObj
        var cardObj = [
            {cardClassName: 'cardContainer',
             imgClassName: 'imgSqContainer',
             imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
             copyPoint: 'Detroit Red Wings Wallpapers'
            },
            {cardClassName: 'cardContainer',
            imgClassName: 'imgSqContainer',
            imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
            copyPoint: 'Detroit Red Wings Wallpapers'
           },
           {cardClassName: 'cardContainer',
           imgClassName: 'imgSqContainer',
           imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
           copyPoint: 'Detroit Red Wings Wallpapers'
          },
          {cardClassName: 'cardContainer',
          imgClassName: 'imgSqContainer',
          imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
          copyPoint: 'Detroit Red Wings Wallpapers'
         },
         {cardClassName: 'cardContainer',
         imgClassName: 'imgSqContainer',
         imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
         copyPoint: 'Detroit Red Wings Wallpapers'
        },
        {cardClassName: 'cardContainer',
        imgClassName: 'imgSqContainer',
        imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
        copyPoint: 'Detroit Red Wings Wallpapers'
       },
       {cardClassName: 'cardContainer',
       imgClassName: 'imgSqContainer',
       imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
       copyPoint: 'Detroit Red Wings Wallpapers'
      },
      {cardClassName: 'cardContainer',
      imgClassName: 'imgSqContainer',
      imgLink:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
      copyPoint: 'Detroit Red Wings Wallpapers'
     },
        ]

        

        for (var i=0; i<cardObj.length; i++){
            var cardClassNames = cardObj[i].cardClassName;
            var imgClassNames = cardObj[i].imgClassName;
            var imgLinks = cardObj[i].imgLink;
            var CopyPoints = cardObj[i].copyPoint;

            var cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', cardClassNames);


            var imgSqContainer = document.createElement('img');
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
}

        
    // var cardContainer = document.createElement('div');
    // cardContainer.setAttribute('class','cardContainer');
    // mainContentArea.appendChild(cardContainer);

    // var imgSqContainer = document.createElement('img');
    // imgSqContainer.setAttribute('class','imgSqContainer');
    // imgSqContainer.setAttribute('src','https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w');
    // cardContainer.appendChild(imgSqContainer);

    // var imgSqTitle = document.createElement('p');
    // imgSqTitle.setAttribute('class','imgSqTitle')
    // imgSqTitle.textContent = 'Detroit Red Wings Wallpapers';
    // cardContainer.appendChild(imgSqTitle);