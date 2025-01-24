document.addEventListener('DOMContentLoaded', () => {
  //where the html will go
  const totalCostDisplay = document.getElementById('totalCost');

  if(!totalCostDisplay){
    console.error("Error: table is missing");
    return;
  }

  //calculate the cost
  const calculateTotalCost = () => {
    //test if function is being called
    console.log("Calculate function is being called");
    let totalCost = 0;

    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      if (cells.length > 0) {
        const priceText = cells[12]?.textContent?.trim() || "0"; //get the total amount
        const price = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); //remove nonnumerics
    
        if (!isNaN(price)) {
          totalCost += price; //add valid price
        } else {
          console.warn(`Invalid price value: ${priceText}`); //log invalid price values for debugging
        }
      }
    });
    
    console.log("Total Cost: ", totalCost); 
    totalCostDisplay.innerHTML = "Total Amount: $" + totalCost;


  }
  initializeTable(calculateTotalCost);

  //export total cost calculation
  window.calculateTotalCost = calculateTotalCost;
});
