/* -- Popular Course */
$(".box-toggle").on("click", function() {
    $(this).parent(".courses-box").toggleClass("active");
});

/* Intro Section */
if($(".intro-section ").length){
    $(".intro-section ").each(function ()
    {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function()
        {		
            $(".intro-section .intro-box").addClass("animated fadeInDown");
        });
    });
}

/* Popular Courses Section */
if($(".popular-courses").length){
    $(".popular-courses").each(function ()
    {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function()
        {		
            $(".popular-courses .courses-box").addClass("animated rollIn");
        });
    });
}