// Write your JavaScript code.

$("#left").click(function(){
    
})

$("#right").click(function(){
    //debugger;

    //find .carousel-item.active  next sibling
    //remove .active from current and add it to sibling

    var $cur  = $(".carousel-item.active");
    var $next = $cur.next();
    //var $next = $(".carousel-item.active .carousel-item")

    //TODO: Need to add logic to check if next is null, if so
    //find the find .carousel-item of the current active one.   

    $cur.removeClass("active");
    $next.addClass("active");

    
})