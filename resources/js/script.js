$(document).ready(function(){
    
    var typed = new Typed(".typed", {
       strings: ["Web Developer.","Data Scientist.","Student."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })
    

    var skillsTopOffset = $(".skill-section").offset().top;
    
    $(window).scroll(function(){
       if(window.pageYOffset > skillsTopOffset -$(window).height() + 200){
               $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from,to,percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    
});
           
       } 
    });
    
});