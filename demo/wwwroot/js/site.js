
$("#left").click(function(){
    
})

$("#right").click(function(){

    var $cur  = $(".carousel-item.active");
    var $next = $cur.next();  

    if($next.length == 0){
        // debugger;
        //There are no more items, restart to first.
        var $parent = $cur.parent();
        var $first = $parent.find(".carousel-item:first-child");
        $first.addClass("active");
    } else {
        $next.addClass("active");
    }

    $cur.removeClass("active");
    
})