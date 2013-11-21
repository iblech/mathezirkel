$(document).ready(function(){
	
	// navigation functions
	function slideTheMenuUp() {
		$(this).find('.subnav').slideUp('fast');
		$(this).removeClass('active'); // Remove the active class to the parent
	}
	
	function slideTheMenuDown() {
		$(this).click(function() { // We wrap the action in a click event
			$(this).addClass('active'); // Add the active class to the parent
			$(this).find('.subnav').slideDown('fast'); // Slide the menu down on click
		}); 
	}									 
	
	$('ul.topnav li').hoverIntent({
		sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
		interval: 100,   // number = milliseconds of polling interval (we don't need this as it is initiated on click rather than hover)
		over: slideTheMenuDown,  // function = onMouseOver callback (required)
		timeout: 0,   // number = milliseconds delay before onMouseOut function call
		out: slideTheMenuUp    // function = onMouseOut callback (required)
	})
	
});