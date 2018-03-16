
$("#left").click(function(){
    // debugger;
    var $cur = $(".carousel-item.active");
    var $previous = $cur.prev();
    
    if($previous.length == 0){
        //set last as active
        var $parent = $cur.parent();
        var $last = $parent.find(".carousel-item:last-child");
        $last.addClass("active");
    } else {
        $previous.addClass("active");
    }
    $cur.removeClass("active");
})

//this could be simplified to a single function that takes selectors..
//leaving it as is because its a demo
$("#right").click(function(){

    var $cur  = $(".carousel-item.active");
    var $next = $cur.next();  

    if($next.length == 0){
        //There are no more items, restart to first.
        var $parent = $cur.parent();
        var $first = $parent.find(".carousel-item:first-child");
        $first.addClass("active");
    } else {
        $next.addClass("active");
    }

    $cur.removeClass("active");
    
})