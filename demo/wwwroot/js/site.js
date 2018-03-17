function swipeLeft(){
    // debugger;
    var $cur = $(".carousel-item.active");
    var $previous = $cur.prev(".carousel-item");
    
    if($previous.length == 0){
        //set last as active
        var $parent = $cur.parent();
        var $last = $parent.find(".carousel-item:last-child");
        $last.addClass("active");
    } else {
        $previous.addClass("active");
    }
    $cur.removeClass("active");
}

function swipeRight(){

    var $cur  = $(".carousel-item.active");
    var $next = $cur.next();  

    if($next.length == 0){
        //There are no more items, restart to first.
        var $parent = $cur.parent();
        var $first = $parent.find(".carousel-item").first();

        $first.addClass("active");
    } else {
        $next.addClass("active");
    }

    $cur.removeClass("active");
    
}


$("#carousel").swipe({
    swipeLeft: swipeLeft,
    swipeRight: swipeRight
})
$("#left").click(swipeLeft);
$("#right").click(swipeRight);