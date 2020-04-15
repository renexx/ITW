
(function($){
/*
  SCROLOVANIE 
 */
    /*var menu = $('.menu'),
        menuLinks = menu.find('a');
    menuLinks.on('click',function(event){
        //zoscroluj
        $('html,body').animate({ scrollTop: $(this.hash).offset().top},1000);
        
         //pridaj hash do adresy
         window.location.hash = this.hash;

        //zabran default akcii
        event.preventDefault();
    }); */
    var scrollLink = $('.scroll');
    scrollLink.click(function(event){
      event.preventDefault();
      $('body,html').animate({ scrollTop: $(this.hash).offset().top},1000);
      window.location.hash = this.hash;
    });
    /**GALERIA */
    var galleries = $('.gallery-set');
    galleries.hide();
    var selected = $('.portfolioFilter').find('.selected '),
        selectedGallery;
// funkcia na zobrazenie selecnutej galerie
    function showGallery( selected){
        if(selected.length){
            var id = selected.find('a').attr('href');
            selectedGallery = $(id);
        }
        var newGallery =  selectedGallery.length ? selectedGallery : galleries.eq(0);
          // ak galeria neexistuje zobrazime prvy, inak zobrazime existujucu
        galleries.not(newGallery).hide();  
        newGallery.fadeIn();
    } 
    //zobraz selected galeriu
  showGallery(selected);
  $('.portfolioFilter a').on('click',function(event){
    var li = $(this).parent()
        li.addClass('selected')
        .siblings().removeClass('selected');
     showGallery(li);   
    event.preventDefault();    
  });
  /*$('.main-nav a').click(function(event){
    var li = $(this).parent()
        li.addClass('selected')
        .siblings().removeClass('selected');
  });*/
   $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function(){

      var sectionOffset = $(this.hash).offset().top -20;
      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('selected');
        $(this).parent().siblings().removeClass('selected');
      }
    });
   });


   $('.menu-toggle').click(function() {
  
    $('.main-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
    
  })
})(jQuery);