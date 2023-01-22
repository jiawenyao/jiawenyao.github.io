
$("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
$(".text-post, .img-post-big, .img-post-medium, .img-post-small").wrap("<td></td>");
$("body").mousewheel(function(event, delta) {
  this.scrollLeft -= delta * 30;
  event.preventDefault();
});

