//js that helps on the customerView.html page
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("orderid");

    //const apiUrl = "http://localhost:3009/api/v1/ordersbyid/";
    const apiUrl = "https://sunfreshapi.onrender.com/api/v1/ordersbyid/";

    //uses api endpoint to get the data from ordersbyid
    fetch(apiUrl)
        //ensure that data is being recieved from database if not error is thrown
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }
        })
        .then((data) => {
            //puts each value into a new option element and is saved into an array. creates dropdown
            data.forEach((item) => {
                const option = document.createElement("option");
                option.value = item.orderid;
                option.textContent = item.orderid;
                dropdown.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    // Move the event listener inside the DOMContentLoaded function
    dropdown.addEventListener("change", function(event) {
        const selectedValue = event.target.value;
        console.log("Selected value:", selectedValue);

        //fetch("http://localhost:3009/api/v1/customers/" + selectedValue)
        //gets data from the database using the api endpoint
        fetch("https://sunfreshapi.onrender.com/api/v1/customers/" + selectedValue)
            //checks if there is a value at the selectedvalue point in database if not, then error is throw
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE ERROR");
                }
            })
            //this displays the cocktail that was selected
            .then(data => {
                console.log(data);
                displayCocktail(data);
            })
            .catch((error) => console.error("FETCH ERROR:", error));
    });

    //function for display the cocktail that is selected in the dropdown event listener
    function displayCocktail(data) {
        const cocktail = data[0];
        //const firstNameField = document.getElementById("first_name");
        const textfield = document.getElementById("orderid");
        const txtFirstName = document.getElementById("first_name");
        const cocktailName = cocktail.first_name;
        const cocktailDesc = cocktail.last_name;
        const cocktailPrice = cocktail.mobile_phone;
        const cocktailProdId = cocktail.email;

        const heading = document.createElement("h1");
        console.log("Name is " + cocktailName);
    
        heading.innerHTML = cocktailName;

        //Set Values on the UI
        //document.getElementById("txtfirstname") = cocktailName.first_name;
        document.getElementById("txtfirstname").value = cocktail.first_name;
        document.getElementById("txtlastname").value = cocktail.last_name;
        document.getElementById("txtphonenumber").value = cocktail.mobile_phone;
        document.getElementById("txtemail").value = cocktail.email;
        //Call the function when the DOM is fully loaded
        document.addEventListener("DOMContentLoaded",displayCocktail);

        first_name.value = cocktailName;
        last_name.value = cocktail.last_name;
        mobile_phone.value = cocktail.mobile_phone;
        email.value = cocktail.email;

        sessionStorage.setItem("qtyoriginal", cocktail.quantity);


        //gets the prices for the product
        if(item_code.value.substring(0,1) == "z"){
            taxpercent.value = 7;
        } else {
            taxpercent.value = 0;
        }
        
        var tax = (taxpercent.value / 100);
        var itemprice = price.value.replace("$", "");
        var convertedprice = parseFloat(itemprice);
        var itemtax = (itemprice * tax);
        var itemtotalprice = (convertedprice + itemtax);
        totalamt.value = itemtotalprice;
    }

    document.getElementById('qty').addEventListener('input', function(event) {
        updateTotalPrice();
    });

    //function for updating the total price of a product
    function updateTotalPrice() {
        var tax = (taxpercent.value / 100);
        var itemprice = price.value.replace("$", "");
        var convertedprice = parseFloat(itemprice);
        var qtyselected = (convertedprice * qty.value);
        var itemtax = (qtyselected * tax) + qtyselected;
        var nettotal = parseFloat(itemtax);
        var finaltotal = Math.round(nettotal * 10) / 10;
        totalamt.value = finaltotal;

        updateQtyAvailable();
    }

    //function to update the qty available after the total price has been updated
    function updateQtyAvailable() {
        if(qty.value == "" || 0){
            quantity.value = sessionStorage.getItem("qtyoriginal");
        } else {
            var avilableqty = quantity.value - qty.value;
            quantity.value = avilableqty;
        }
    }
});
