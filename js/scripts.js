
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
   var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

//acordion
$(document).ready(function(){
	$(".sec").eq(0).on('click, mouseenter',function(){
		$(this).next(".collapsable").slideToggle();
		$(this).children(".section").text("Excellence");
		
	});
	$(".sec").eq(1).on('click, mouseenter',function(){
		$(this).next(".collapsable").slideToggle();
		$(this).children(".section").text("Vision");
		$(this).children(".fa").toggleClass("fa-minus");
	});
	$(".sec").eq(2).on('click, mouseenter',function(){
		$(this).next(".collapsable").slideToggle();
		$(this).children(".section").text("Openness");
		$(this).children(".fa").toggleClass("fa-minus");
	});
    $(".sec").eq(3).on('click, mouseenter',function(){
		$(this).next(".collapsable").slideToggle();
		$(this).children(".section").text("Leaderhip");
		$(this).children(".fa").toggleClass("fa-minus");
	});
    $(".sec").eq(4).on('click, mouseenter',function(){
		$(this).next(".collapsable").slideToggle();
		$(this).children(".section").text("Collaboration");
		$(this).children(".fa").toggleClass("fa-minus");
	});
    $(".sec").mouseenter(function(){
		$(this).addClass("z-depth-4");
        $(".sec").eq(0).children(".section").text("Excellence");
        $(".sec").eq(1).children(".section").text("Vision");
        $(".sec").eq(2).children(".section").text("Openness");
        $(".sec").eq(3).children(".section").text("Leadership");
        $(".sec").eq(4).children(".section").text("Collaboration");
		$(this).next(".collapsable").css({"width":"110%"});
	});
	$(".sec").mouseleave(function(){
		$(this).removeClass("z-depth-4");
		$(".sec").eq(0).children(".section").text("Excellence");
		$(".sec").eq(1).children(".section").text("Vision");
		$(".sec").eq(2).children(".section").text("Hi");
        $(".sec").eq(2).children(".section").text("Leadership");
        $(".sec").eq(2).children(".section").text("Collaboration");
        $(this).next(".collapsable").slideToggle();
		$(this).next(".collapsable").css({"width":"100%"});
	});

});

//logo slide
$(document).ready(function(){
    $('.partner-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

//send main
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    }; 
     const serviceID = "service_sjwm0t4";
     const templateID = "template_akxvljj";

     emailjs.send(serviceID,templateID,params)
     .then(
        (res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("phone").value="";
            document.getElementById("message").value=";"
            console.log(res);
            alert("Your message sent successfully")
        }
     )
     .catch((err)=>console.log(err));

}
