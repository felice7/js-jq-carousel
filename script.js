$(document).ready(function(){
    
    $('.next').click(function(){
        var img_corrente = $('img.active');
        var icona_corrente = $('span.present');
        
        var img_successiva = img_corrente.next('img');
        if(img_successiva.length == 0) {
            img_successiva = $('img.first');
        } 
        
        
        var icona_successiva = icona_corrente.next('span');
        if(icona_successiva.length == 0) {
            icona_successiva = $('span.first');
        } 
        
        
        img_corrente.removeClass('active');
        icona_corrente.removeClass('present');
        
        
        img_successiva.addClass('active');
        icona_successiva.addClass('present');
        
        })

    $('.prev').click(function() {
        var img_corrente = $('img.active');
        var icona_corrente = $('span.present');
        
        
        var img_precedente = img_corrente.prev('img');
        if(img_precedente.length == 0) {
            img_precedente = $('.last');
        }
        
        var icona_precedente = icona_corrente.prev('span');
        if(icona_precedente.length == 0) {
            icona_precedente = $('span.first');
        } 
        
        
        img_corrente.removeClass('active');
        icona_corrente.removeClass('present');
        
        
        img_precedente.addClass('active');
        icona_precedente.addClass('present');
        
        
        })
        
        $(function(){
            $('.slider-container').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
        })
        });
        
    
});
