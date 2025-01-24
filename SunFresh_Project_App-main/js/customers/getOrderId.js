//gets the api endpoint to get the customers data from database
fetch("https://sunfreshapi.onrender.com/api/v1/customers_/")
  //ensure that user is able to get the data from the api
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  //then calls function on line 20
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


//This function is to see data about cocktail when the ID is searched
  function displayCocktail(data) {
    const cocktail = data[0];
    const cocktailDiv = document.getElementById("cocktail");
    const textfield = document.getElementById("orderid");
    // cocktail name
    const cocktailName = cocktail.max;
    const cocktailOrderidField = cocktail.orderid;
    const heading = document.createElement("h1");
    const orderidno = cocktailName + 1;
    heading.innerHTML = "Order No: " + orderidno;
    orderid.value = orderidno;
    cocktailDiv.appendChild(heading);
    //Set session variable for orderid
    sessionStorage.setItem("orderid", orderidno);
    var sessionorderid = sessionStorage.getItem("orderid");
    //alert(sessionorderid);
  
  }   
