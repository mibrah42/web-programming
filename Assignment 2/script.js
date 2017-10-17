
var roomTypes = {
	"standard": 100,
	"spacious": 120,
	"luxury": 150
}

var options = {
	"meal": 40,
	"pool": 20
}

function getRoomPrice(){
	var room_price = 0;
	var rooms = document.getElementsByName("room-type");

	for(var i = 0; i < rooms.length; i++){
		if (rooms[i].checked){
			room_price = roomTypes[rooms[i].value];
			break;
		}
	}
	return room_price;
}

function getOptionsPrice(){
	var options_price = 0;

	var optionElements = document.querySelectorAll("input[type=checkbox]");

	for(var i = 0; i < optionElements.length; i++){
		if(optionElements[i].checked){
			options_price += options[optionElements[i].value];
		}
	}

	return options_price;
}

function getChildrenPrice(){
	var extraChildrenPrice = 0;
	var childrenList = document.getElementById("children-list");
	var numOfChildrenString = childrenList.options[childrenList.selectedIndex].value;
	var numOfChildren = parseInt(numOfChildrenString);
	if(numOfChildren > 3){
		var extraChildrenPrice = (numOfChildren-3) * 10;
	}

	return extraChildrenPrice;
	
}

function calculateTotal(){
	var subTotal = getRoomPrice() + getOptionsPrice() + getChildrenPrice();
	var tax = subTotal * 0.13;
	var total = subTotal + tax;

	var totalDisplay = document.getElementById("display-total");
	totalDisplay.innerHTML = "Your Total is: $" + total;
}

function checkDate(){
	var arrivalInput = document.getElementById("arrival");
	var departureInput = document.getElementById("departure");

	var arrival = new Date(document.getElementById("arrival").value);
	var departure = new Date(document.getElementById("departure").value);

	if(arrival-departure > -86400){
		alert("Departure date cannot be before or on the same day of the arrival");
		departureInput.value = "";
	}

}

function displayListItems(id){
	console.log(id);
	var numID = parseInt(id);
	var showAges = document.getElementById('show-ages');
	showAges.innerHTML = ""; 

	var totalElement = document.getElementById("display-total");

	calculateTotal();
	
	for(var i = 1; i<=numID; i++){
		showAges.innerHTML += '<label>Age of child '+i+': </label><select name="child-'+i+'-age" required><option value="">select age</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><br>';
	}
}

function checkForm(){
	var formInputs = document.getElementsByClassName("text-input");
	var missing = 0;
	for(var i = 0; i < formInputs.length ; i++){
	 	if(formInputs[i].value == "" || formInputs[i].value == null){
	 		missing += 1;
	 	}
	}

	if(missing){
		alert("you must fill all the fields");
		return false;
	} 

	var rooms = document.getElementsByName("room-type"); 
	k = 0;
	for(var i = 0; i < rooms.length ; i++){
		if(rooms[i].checked) {
			k += 1;
			break;
		}
	}
	if(k==0){
		alert('you must select a room');
		return false;
	}

	alert("Your application has been submited! we look forward to seeing you!");
	return true;

}