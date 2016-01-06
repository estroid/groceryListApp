$(document).ready(function(){

// User can submit text
  $('#userInput').submit(function(e){ //everything between curly braces is called a code block
    e.preventDefault(); //prevents default behavior in html of refreshing page load
    var newItem =  $("#item").val(); //creates a variable called newItem from the value in the input with ID item


 // inserts value of newItem variable into html with the .append()

    $('#list').append("<li class='item'><label><input type='checkbox' name='new-item'>" + newItem + "</label><br></li>"); // Appends (or adds after) html list item objects to the <ul> with the id of list
    $("#item").val(""); // Since we prevented default behavior above, we need to reset the input field so that the input field stays clear after each submission
  });

// User can check/strikethrough and uncheck items
	$('#list').on('click', 'li', function(){ // .on(events[,selector],handler) method will listen for a click event on a particular list item and will run the function
		console.log('hello'); //should see "hello" when I check/uncheck an item
		$(this).toggleClass('completed'); // Swaps out .completed css either to line-through or no line-through when the list item is clicked
	});

// User can permanently delete items




// Optional: users can move items to proper food category?
// Optional: HTML <input> autocomplete Attribute //

}); //closes the document ready function
