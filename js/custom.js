$(document).ready(function(){

// User can add items

	var list = $('#listOfItems');
	$('form').submit(function(event){
		event.preventDefault();
		var newItem = $(this).find('input').val();
		console.log(newItem);
		list.prepend('<li>'+newItem+' <span>X</span></li>');
	});

// User can check and uncheck items

list.on('dblclick','li',itemClick);

function itemClick(event){
    event.stopPropagation();
    $(this).toggleClass('completed');
}


// User can permanently delete items

list.on('click','li span',function(){
    $(this).parent().remove();
});


// Optional: users can move items to proper food category?
// Optional: HTML <input> autocomplete Attribute //

});