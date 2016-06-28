
//for each slideshow
$("div.slideshow").each(function() {

    // store how many slides in slideshow
    var numberOfSlides = $(this).find("div.slideshow-content div").length;

    
    // store the slideshow content holder
    var holder = $(this).find("div.slideshow-content");
    
    // store pagination span
    var pagination = $(this).find("span.pagination");
    
    //store the progress of the slideshow
    var slide = 0;
    
    
//when i clickk + in this slideshow
    
// make the slideshow content move to the left(!)

    $(this).find("a.next").on("click", function (event) {
        
        if (slide < numberOfSlides - 1) {
            // increase slide number by 1
            slide += 1;
        }
        else {
            slide = 0;
        }
        holder.css("left", -100 * slide + "%");
            
        pagination.html((slide + 1) + "/" + numberOfSlides);
        // stop link from doing default
        event.preventDefault();
    });


//when i clickk - in this slideshow
// make the slideshow content move to the right(!)
    
    $(this).find("a.prev").on("click", function (event) {
        
        // if there's a slide to go back to
        if (slide > 0) {  
            // increase slide number by 1
            slide -= 1;
        } 
        else {
            slide = numberOfSlides - 1;
        }
        
        holder.css("left", -100 * slide + "%");
            
        pagination.html((slide + 1) + "/" + numberOfSlides);
        // stop link from doing default
        event.preventDefault();
    });
 
    //save the next link to variable
    var nextLink = $(this).find("a.next");
    
    // pretend to click the next link every two seconds
    
    setInterval(function() {
        
        nextLink.trigger("click");
        
    }, 2000);
    
    //clearInterval to stop
});



