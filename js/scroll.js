
$("#page-wrap").wrapInner("<table cellspacing='0'><tr>");
$(".text-post, .img-post-big, .img-post-medium, .img-post-small").wrap("<td></td>");
$("body").wheel(function(event, delta) {
  this.scrollLeft -= delta * 30;
  event.preventDefault();
});

