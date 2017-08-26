var index = 0;
var x,y;
bgchange();

function bgchange()
{
	var i;
	x = document.getElementsByClassName("bg");
	y = document.getElementsByClassName("box");
	for(i =  0;i < x.length;i++)
	{
		x[i].style.display = "none";
	}
	x[index].style.display = "block";
	index++;
	if(index >= x.length)
	{
		index = 0;
	}
	// if(index = 1)
	// {
	// 	x.style.opacity = "0.7";
	// }
	setTimeout(bgchange,10000);
}

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