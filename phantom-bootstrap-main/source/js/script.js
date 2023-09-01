(function($) {
	"use strict";

	$(".history-scroller").niceScroll({
		cursorwidth: "10px",
		background: "#0d1015",
		cursorborder: "0",
		cursorborderradius: "0",
		autohidemode: false,
		zindex: 5
	});

	// testimonial-slider
	$('.testimonials').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		adaptiveHeight: true,
		
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	animatedProgressBar();
	windowHieght();
	previewPannel();

	function animatedProgressBar () {
		$(".progress").each(function() {
			var skillValue = $(this).find(".skill-lavel").attr("data-skill-value");
			$(this).find(".bar").animate({
				width: skillValue
			}, 1500);

			$(this).find(".skill-lavel").text(skillValue);
		});
	}

	function windowHieght(){
		if ( $(window).height() <=768 ) {
			$(".pt-table").addClass("desktop-768");
		} else {
			$(".pt-table").removeClass("desktop-768");
		}
	}

	/*----------------------------------------
		Isotope Masonry
	------------------------------------------*/
	function isotopeMasonry() {
		$(".isotope-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true
		});
		$(".isotope-no-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true,
			masonry: {
				columnWidth: 1
			}
		});

		$(".filter a").on("click", function(){
			$(".filter a").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$(".isotope-gutter").isotope({
					filter: selector,
					animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false
				}
			});
			return false;
		});
	}

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Preview Pannel
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
	function previewPannel() {
		$(".switcher-trigger").on("click", function() {
			$(".preview-wrapper").toggleClass("extend");
			return false;
		});
		if ($(window).width() < 768 ) {            
			$(".preview-wrapper").removeClass("extend");
		}
		$(".color-options li").on("click", function(){			
			$("#color-changer").attr({
				"href":"css/colors/"+$(this).attr("data-color")+".css"
			});
			localStorage.setItem('color-theme', $(this).attr("data-color")) ; 
			return false;
		});
	}
	
	$(window).on("load", function() {
		isotopeMasonry();

		$(".preloader").addClass("active");
		setTimeout(function () {
			$(".preloader").addClass("done");
		}, 1000);
	});

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Work details 
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
		function getWorksInfos () {
			$(".works-item").on("click", function(){
				let projectTitle = $(this).find("h4").text() ; 
				let projectImg = $(this).find("img").attr("src") ; 
				let stacks = $(this).find("ul").text();
				let objectifs = $(this).find("p.Objectifs").text();
				let description = $(this).find("p.Description").text();
				let workInfos = {
					title: projectTitle,
					imageSrc: projectImg,
					stack: stacks,
					objectives: objectifs,
					description: description
				};  

				populateWorkDetail(workInfos) ;
				
		}) ;
		}
		getWorksInfos() ;

		
		function ToggleWorkDetail(){
			let worksItem = $(".works-item") ;
			worksItem.on("click", function(){
				if (ctnWorkDetail.css("display") !== "flex") {
					ctnWorkDetail.toggle();
				}				
			}) ;
		}
		ToggleWorkDetail();

		/* fonction populateWorkDetail
		* si getWorksInfos && workDetail display flex
		* recupère workInfos 
		* assigne les infos dans workDetails
		*/

		
		function populateWorkDetail(workInfos){
			if(workInfos){
				$(".titleWD").text(workInfos.title) ;
				$(".imgWorkDetail").attr({src: workInfos.imageSrc, width:"293.33"});
				$(".stackWD").text(workInfos.stack);
				$(".Objectifs").text(workInfos.objectives);
				$(".descriptionWorkDetail").text(workInfos.description) ;
			}
		}
		
		populateWorkDetail();
	
	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Switch Dark/Light Mode 
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

	document.addEventListener('DOMContentLoaded', () => {
		const theme = localStorage.getItem('theme');
		if (theme === 'sombre') {
		document.body.classList.add('dark');
		} 
		const colortheme = localStorage.getItem('color-theme') || "lilas";
		$("#color-changer").attr({
			"href":"css/colors/"+colortheme+".css"
		});
	});
	
	

	let darkButton = document.querySelector(".cdarkSwitch") ;
	const themeText = document.querySelector('.darkOrLight'); 

	darkButton.addEventListener("click", function() {
		document.body.classList.toggle('dark') ; 
		darkButton.classList.toggle('clightSwitch');
        darkButton.classList.toggle('cdarkSwitch');

			if (document.body.classList.contains('dark')) {
				themeText.textContent = 'light';
				localStorage.setItem('theme', 'sombre');
			} else {
				themeText.textContent = 'dark';
				localStorage.setItem('theme', 'clair');
			}
	}); 


})(jQuery);