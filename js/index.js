//How does hide and show work with the existing CSS and HTML? Does it change display? 

//Prevent a form submission with the event.preventDefault() function
//!!NOT WORKING
$(".button blue").click(function(event){
	event.preventDefault();
	console.log("nope");
})


//Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded


// If a user clicks "Read More" on the primary column:
// have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()
$(".read-more").click(function(){
	$("p").slideDown();
	$(".read-more").hide();
})


// If a user clicks "Read Less" on the primary column:
// have the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
// show the "Read More" link using $.show()
//??HOW DO I MAKE IT ONLY SLIDE UP THAT PARTICULAR PARAGRAPH?
$(".read-less").click(function(){
	$("#show-this-on-click").slideUp();
	$(".read-more").show();
	$(".read-less").hide();
})

// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()
$(".learn-more").click(function(){
	$("span").slideDown();
	$(".learn-more").hide();
})