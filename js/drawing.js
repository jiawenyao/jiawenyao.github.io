var accordions = document.getElementsByClassName("accordion");
// var panels = document.getElementsByClassName("panel");
//var cats = document.getElementsByClassName("cat");
var widths = [];

$(document).ready(function () {
  for (i = 0; i < accordions.length; i++) {
    var _currentPos = offset(accordions[i]);
    widths.push(accordions[i].offsetWidth);

    accordions[i].addEventListener("click", function() {
      // this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        //panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.maxHeight = "700px";
        panel.style.overflow = "scroll";
      }
    });
  }


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  var about = document.getElementById("_about");
  about.addEventListener("click", function() {
    $("#about").fadeToggle(800, "swing", function() {
    });
  })

  var contact = document.getElementById("_contact");
  contact.addEventListener("click", function() {
    $("#contact").fadeToggle(800, "swing", function() {
    });
  })
  var click = false;

});

function openInNewTab(url) {
    $("<a>").attr("href", url).attr("target", "_blank")[0].click();
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
