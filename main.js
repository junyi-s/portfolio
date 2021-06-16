//main js file for portfolio website

$(document).ready(function(){
	var menuOptions = document.getElementsByClassName("option");
	var tabs = document.querySelectorAll(".tab");

	//OnClick Event for Menu System
	for (let i = 0; i < menuOptions.length; i++) {
		menuOptions[i].addEventListener("click", function() {

			$("#home").fadeOut("slow", function() {
    		$("#home").addClass("hidden");
			});

			let temp = menuOptions[i];
			for(let i = 0; i < menuOptions.length; i++) {
				menuOptions[i].classList.remove('active');
			}
			event.currentTarget.classList.add('active');
			let selection = temp.dataset.type;
			let option = document.getElementById(selection);
			for(let i = 0; i < tabs.length; i++) {
				$(tabs[i]).fadeOut("slow", function() {
    				tabs[i].classList.add('hidden');
				});
			}

			$(option).delay(600).fadeIn("slow", function() {
    		$(this).removeClass("hidden");
			});


			//option.classList.remove('hidden');

		});
	}
})
