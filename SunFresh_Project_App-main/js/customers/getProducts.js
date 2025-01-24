document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.getElementById("dropdown");
  

  // Replace this URL with the API endpoint or data source you want to use
  const apiUrl = "https://sunfreshapi.onrender.com/api/v1/price/";

  fetch(apiUrl)
      .then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error(`Failed to fetch data: ${response.status}`);
          }
      })
      .then((data) => {
          // Assuming the fetched data is an array of objects with 'id' and 'value' properties
          data.forEach((item) => {
              const option = document.createElement("option");
              option.value = item.product;
              option.textContent = item.product;
              dropdown.appendChild(option);
          });
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
});

//Event when user chooses drop down

dropdown.addEventListener("change", function(event) {
    const selectedValue = event.target.value;
    // Perform your action based on the selected value
    console.log("Selected value:", selectedValue);
  
    //API
    
    fetch("https://sunfreshapi.onrender.com/api/v1/inventory/" + selectedValue)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  function displayCocktail(data) {
    const cocktail = data[0];
    const cocktailDiv = document.getElementById("cocktail");
    const textfield = document.getElementById("item_code");
    // cocktail name
    const cocktailName = cocktail.productcode;
    const cocktailDesc = cocktail.description;
    const cocktailPrice = cocktail.price;
    const cocktailProdId = cocktail.productid
    //const productcode = coctail.description
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    
    



    item_code.value = cocktail.productcode;
    description.value = cocktail.description;
    price.value = cocktail.price;
    productid.value = cocktail.productid;
    quantity.value = cocktail.quantity;

    //Capture quantity in session variable for later use
    sessionStorage.setItem("qtyoriginal", cocktail.quantity);
    
    //description.value = cocktail.description;
    //cocktailDiv.appendChild(heading);

    /*
      Description:
      Conditional Statement
      Tax Percentage is for item_codes that begin with the letter z to have 7% else it's 0%

      Date Added: 5/13/23 Author: JSeaman
    */
    

      if(item_code.value.substring(0,1) == "z"){
        taxpercent.value = 7;
       } else {
        taxpercent.value = 0;
       }
      
       /*
       Section: Capture the Item Total, obtain the tax and output total due.
       */

       //Tax Percent from the conditional statement * 100 to obtain decimal value
       var tax = (taxpercent.value / 100);
       //Obtain the Item price
       var itemprice = price.value
       //Remove the $ from the string value
       itemprice = itemprice.replace("$", "");
       //Converted the value from string to a decimal
       var convertedprice = parseFloat(itemprice);
       //Item Price * Tax
       var itemtax = (itemprice * tax);
       //Obtain the total price to be displayed on the texbox
       var itemtotalprice = (convertedprice + itemtax);
       totalamt.value = itemtotalprice; //sets value on the screen

      
     

       
  }   

  //Event Listener for qty entered
  document.getElementById('qty').addEventListener('input', function(event) {
    updateTotalPrice();
  });



  //Change the price based on the item in the quantity textbox
  function updateTotalPrice() {
       var tax = (taxpercent.value / 100);
       //Obtain the Item price
       var itemprice = price.value
       //Remove the $ from the string value
       itemprice = itemprice.replace("$", "");
       //Converted the value from string to a decimal
       var convertedprice = parseFloat(itemprice);
       //Capture the Qty
       var qtyselected = (convertedprice * qty.value);
       //Item Price * Tax
       var itemtax = (qtyselected * tax) + qtyselected;
       //Obtain the total price to be displayed on the texbox
       //var itemtotalprice = (convertedprice + itemtax);
       var nettotal = parseFloat(itemtax);
       var finaltotal = Math.round(nettotal * 10) / 10;
       totalamt.value = finaltotal; //sets value on the screen

       //Update Qty Available
       updateQtyAvailable();
  }

  function updateQtyAvailable() {
    if(qty.value == "" || 0){
      quantity.value = sessionStorage.getItem("qtyoriginal");
    }
    else {
      var avilableqty = quantity.value - qty.value;
      quantity.value = avilableqty;
    }
    
  }

    
});

