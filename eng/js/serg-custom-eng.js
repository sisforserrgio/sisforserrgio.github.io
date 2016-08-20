$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 1, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );





$('#FFAB').click(function() {
    if ($('#FFAB').hasClass('active')){
         $('.overlay').css({
        'opacity': '0',
             'transform': 'scale(0)',
             'background-color': '#f44336'
    })
    } else {
         $('.overlay').css({
        'opacity': '0.9',
             'transform': 'scale(90)',
             'background-color': '#fff'
    })
      }
});

$('#overlay').click(function() {
    $('.fixed-action-btn').closeFAB();
    $('.overlay').css({
        'opacity': '0',
        'transform': 'scale(0)',
        'background-color': '#f44336'
    })
});


  







//TYPED.JS SETTINGS


$(function () {
    $(".typetype").typed({
        strings: ["Deandre","Randell","Dorthey","Lynsey","Marge","Shandra","Alethia","Brigida","Flossie","Otelia","Bridgette","Jacqulyn","Lashawnda","Cherry","Kenya","Rosalina","Anette","Santana","Stephan","Aimee","Kieth","Elna","Kathrine","Caterina","Tameka","Vernia","Robena","Kanesha","Emily","Maxwell","Ahmed","Danuta","Alina","Tennie","Kasi","Zulema","Terrell","Janita","Normand","Rosamond","Cora","Alda","Nicky","Elvina","Agnus","Jo","Mayra","Monty","Andree","Xiomara","Jacinda","Shae","Marth","Rosella","Eduardo","Sharyl","Miguelina","Joline","Taunya","Norbert","Randa","Romaine","Farrah","Eleanore","Adele","Gil","Earlie","Caridad","Sharon","Rupert","Erica","Shavonda","Randolph","Talitha","Genia","Treva","Paulina","Adan","Xenia","Nichelle","Lasandra","Arnette","Marvella","Reynalda","Teresa","Shantel","Eufemia","Mitch","Cordelia","Avis","Roxanne","Dalene","Despina","Lucilla","Tamie","Glenna","Nadine","Juliane","Abby","Marlena"],
        typeSpeed: 0,
        backSpeed: 4,
        startDelay: 0,
        backDelay: 2500,
        loop: true,
        shuffle: true,
        showCursor: false
        
        });
    });



