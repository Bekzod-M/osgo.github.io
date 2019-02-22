$(document).ready(function(){
  $(".show-text").click(function(){
    $('#myModal').find(".popup_sign_in").toggle();
    $('#myModal').modal('handleUpdate');
  });
});

$('.our_partners').owlCarousel({
  items: 4,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  responsiveClass: true,
  responsive:{
    320:{
      items:2,
      nav: true,
      loop: true
    },
    480:{
      items:3,
      nav: true,
      loop: true
    },
    768:{
      items:4,
      nav: true,
      loop: true
    },
    992:{
      items:4,
      nav: true,
      loop: true
    }
  }
});

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('.form_date').datetimepicker({
	weekStart: 1,
	todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0
});

$('.our_partners').owlCarousel({
  items: 1,
  nav: true,
  loop: true,
});