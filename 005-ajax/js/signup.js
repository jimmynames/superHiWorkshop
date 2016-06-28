// when i submit a form 
// get the information and send it using ajax
// and don't go to the next page

$('form').on("submit", function(event) {
    
    // save where form is going to
    
    var url = $(this).attr("action");
    
    // save how the form is sending data
    
    var method = $(this).attr("method");
    
    // save le submit button 
    
    var button = $(this).find("input[type=submit]");
    
    // save le email address
    
    var email = $(this).find("input[type=email]").val();
    
    // change button value to say submitting
    
    button.val("Submitting...");
    
    // send le ajax request
    
    $.ajax({
        url: url,
        method: method,
        data: "email= " + email,
        success: function() {
            button.css("background-color", "#f5fffa").val('Thank you');
            //alert("thanks");
            
        },
        error: function () {
            button.val('Try again sucker');
        }     
    })
    
    event.preventDefault();
});