// when a user scrolls down the document
$(document).on("scroll", function () {
    // how far down the page am i?
    
    var pixels = $(document).scrollTop()
    
    
    //$("div.bar").html("we have scrolled by " + pixels)
    
    // if the user has scrolled by over 100px, show the header
    // to show the header add class "show"
    if (pixels > 100) {    
        $("header").addClass("show")
    }
    else {
        $("header").removeClass("show")
    }
   
    
    // fade in or out the hero banner depending on the pixels
    var opacity = 1 - (pixels/1000)
    $("div.hero").css("opacity", opacity)
    
    
    //make hero banner smaller as scroll
    var height = 600 - (pixels/2)
    $("div.hero").css("height", height)
    
    //doucment height - window height 
    
    // find how tall the page is 
    
    var documentHeight = $(document).height();
    
    // find how tall the window is 
    
    var windowHeight = $(window).height();
    
    // what is the percentage down the page
    
    var scrollHeight = documentHeight - windowHeight;
    
    // make the progress bar that percentage
    
    var percentage =  100 * pixels / scrollHeight;
    
    $('div.progress').css('width', percentage + "%");
})

// do some stuff 

