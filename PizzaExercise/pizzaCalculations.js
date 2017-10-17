

 //Set up an associative array
 var pizza_prices = {
    "Round6": 5.50,
    "Round8": 7.99,
    "Round10": 9.50,
    "Round12": 11.38
 }

 // var pizza_prices = new Array();
 // pizza_prices["Round6"]=5.50;
 // pizza_prices["Round8"]=7.99;
 // pizza_prices["Round10"]=9.50;
 // pizza_prices["Round12"]=11.38;
 
 //Set up an associative array 

 var topping_prices= new Array();
 topping_prices["None"]=0;
 topping_prices["Mushroom"]=5;
 topping_prices["Sun"]=5;
 topping_prices["chicken"]=7;
 topping_prices["beef"]=8;
 topping_prices["shrimps"]=10;
 topping_prices["pineapple"]=5; 
 topping_prices["steak"]=9;
 topping_prices["avocado"]=5;
 topping_prices["tuna"]=5;
 topping_prices["broccoli"]=8;
 topping_prices["olives"]=7;
 topping_prices["garlic"]=12;
 
     
     
// pizzaSizePrice() finds the price based on the size of the pizza.
// Here, we need to take user's the selection from radio button selection
function getPizzaSizePrice()
{  
    var pizzaSizePrice=0;
    //Get a reference to the form id="pizzaform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the pizza the user Chooses name=selectedPizza":
    var selectedPizza = theForm.elements["selectedpizza"];
    //Here since there are 4 radio buttons selectedpizza.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedPizza.length; i++)
    {
        //if the radio button is checked
        if(selectedPizza[i].checked)
        {
            //we set pizzaSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" pizza we set it to 25
            //by using the pizza_prices array
           
            pizzaSizePrice = pizza_prices[selectedPizza[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the pizzaSizePrice
    return pizzaSizePrice;
}

//This function finds the topping price based on the 
//drop down selection
function getToppingPrice()
{
    var pizzaToppingPrice=0;
    //Get a reference to the form id="pizzaform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the select id="topping"
     var selectedTopping = theForm.elements["topping"]
     for(var i=0 ; i<selectedTopping.length; i++ ){
        if(selectedTopping[i].checked)
        {
            pizzaToppingPrice+=topping_prices[selectedTopping[i].value]
        }
     }
     
    //set pizzaTopping Price equal to value user chose

    //finally we return pizzaToppingPrice
    return pizzaToppingPrice;
}


function cheesePrice()
{
    var cheesePrice=0;
    //Get a reference to the form id="pizzaform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCheese = theForm.elements["includecheese"];

    //If they checked the box set candlePrice to 5
    if(includeCheese.checked==true)
    {
        cheesePrice=5;
    }
    //finally we return the candlePrice
    return cheesePrice;
}

function deliveryPrice()
{
    
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var deliveryPrice=0;
    //Get a refernce to the form id="pizzaform"
    var theForm = document.forms["pizzaform"];
    
    var includeDelivery = theForm.elements["includedelivery"];
  
    if(includeDelivery.checked==true){
        deliveryPrice=20;
    }
    
    return deliveryPrice;
}
        
function calculateTotal()
{
    
    var total = (getPizzaSizePrice() + getToppingPrice() + cheesePrice() + deliveryPrice());
    var tax= total*.13;
    totalTaxed=total+tax;
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the pizza $"+totalTaxed;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}