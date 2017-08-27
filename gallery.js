

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "normal");
  return false;
});


$(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});

