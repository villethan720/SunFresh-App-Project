document.addEventListener('DOMContentLoaded', () => {
  
  const initializeTable = (onReadyCallback) => {
    //test if initialization happened
    console.log("initializeTable called.");
  
    const table = document.getElementById("table");
    if (!table) {
      console.error("Error: Table element not found.");
      return;
    }

  //create table
  new gridjs.Grid({
    search: true,
    sort: true,
    pagination: true,
    fixedHeader: true,
    height: "90%",
    columns: [
      { name: "CustomerID", width: "200px" },
      { name: "Order Id", width: "200px" },
      { name: "Name", width: "200px" },
      { name: "Phone Number", width: "200px" },
      { name: "Email", width: "300px" },
      { name: "Product", width: "200px" },
      { name: "Product Code", width: "200px" },
      { name: "Description", width: "200px" },
      { name: "Price", width: "200px" },
      { name: "Quantity", width: "200px" },
      { name: "Tax Exempt", width: "200px" },
      { name: "Tax Percent", width: "200px" },
      { name: "Total Amt", width: "200px" },
      { name: "Status", width: "200px" },
      { name: "Notes", width: "200px" },
    ],
    server: {
      url: "https://sunfreshapi.onrender.com/api/v1/customers/",
      then: (data) => {
        data.sort((a, b) => b.order_id - a.order_id);
        return data.map((wine) => [
          wine.customers_id,
          wine.orderid,
          //combine first and last name together to make search consistent
          `${wine.first_name} ${wine.last_name}`,
          wine.mobile_phone,
          wine.email,
          wine.product,
          wine.productcode,
          wine.description,
          wine.price,
          wine.qty,
          wine.tax_exempt,
          wine.taxpercent,
          wine.totalamt,
          wine.status,
          wine.notes,
        ]);
      },
    }
  }).render(table);
  };

//export table initialization
window.initializeTable = initializeTable
});



 
