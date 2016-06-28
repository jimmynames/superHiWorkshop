
// Changed background color 
//$('body').css("background-color", "#add8e6");

// Changed content of h1
//$("h1").html("jimmy");

// Add a class to HTML
//$("h1").addClass("blue");

// when i click h1, add the class of blue
$("h1").on("click", function () {
    
    $("h1").addClass("blue");
    
});


// when i click an img's link, put it in a modal


$("a.show-modal").on("click", function (event) {
    
    
    // store href as variable
    var href = $(this).attr("href");
    
    // replace the modal with out image
    $("div.modal-content").html("<img src=\"" + href + "\">");
    
    // fade in modal
    $("div.modal").fadeIn();
    
    // stop the link going to the next page
    event.preventDefault();
   
});

$("div.modal-close, div.modal-background").on("click", function () {
    $("div.modal").fadeOut();
});
                

