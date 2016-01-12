$(document).ready(function(){
<<<<<<< HEAD
=======

// User can submit text
  $('#userInput').submit(function(e){ //everything between curly braces is called a code block
    e.preventDefault(); //prevents default behavior in html of refreshing page load
    var newItem =  $("#item").val(); //creates a variable called newItem from the value in the input with ID item


 // inserts value of newItem variable into html with the .append()

  //   $('#list').append("<li class='item'><label><input type='checkbox' name='new-item' class='checkbox'>" + newItem + "</label> <button name='button' class='delete'>X</button></li>"); // Appends (or adds after) html list item objects to the <ul> with the id of list
  //   $("#item").val(""); // Since we prevented default behavior above, we need to reset the input field so that the input field stays clear after each submission
  // });
>>>>>>> master

$('#list').append("<li class='item'><label><input type='checkbox' name='new-item' class='checkbox'>" + newItem + "</label><i class='fa fa-times delete'></i></li>"); // Appends (or adds after) html list item objects to the <ul> with the id of list
    $("#item").val(""); // Since we prevented default behavior above, we need to reset the input field so that the input field stays clear after each submission
  });

<<<<<<< HEAD
	var list = $('#listOfItems');
	$('form').submit(function(event){
		event.preventDefault();
		var newItem = $(this).find('input').val();
		console.log(newItem);
		list.prepend('<li>'+newItem+' <span>X</span></li>');
=======

// User can check/strikethrough and uncheck items
	$('#list').on('click', '.checkbox', function(){ // .on(events[,selector],handler) method will listen for a click event on a particular list item and will run the function
		console.log('hello'); //should see "hello" when I check/uncheck an item
		$(this).closest('li').toggleClass('completed'); // Swaps out .completed css either to line-through or no line-through when the list item is clicked
>>>>>>> master
	});

// User can permanently delete items

<<<<<<< HEAD
list.on('dblclick','li',itemClick);

function itemClick(event){
    event.stopPropagation();
    $(this).toggleClass('completed');
}
=======
	$('#list').on('click', '.delete', function() {
		console.log('whattup');

		// (this) removes the whole list element
		$(this).closest('li').remove(); // .closest has to be an element in which delete is inside of
>>>>>>> master

		// (this) removes the delete button that was clicked by the user
		// $(this).remove();

		// This deletes all the buttons
		// $('.deleteButton').remove();

<<<<<<< HEAD
list.on('click','li span',function(){
    $(this).parent().remove();
});
=======
		});
>>>>>>> master


// Optional: users can move items to proper food category?
// Optional: HTML <input> autocomplete Attribute //

<<<<<<< HEAD
});
=======
}); //closes the document ready function
>>>>>>> master
