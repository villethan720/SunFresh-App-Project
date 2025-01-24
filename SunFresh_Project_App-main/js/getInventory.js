new gridjs.Grid({
  search: true,
  sort: true,
  pagination: true,
  fixedHeader: true,
  height: "90%",

    
    
  columns: [
    { name: "ProductID", width: "200px" },
    { name: "Product", width: "200px" },
    { name: "Description", width: "200px" },
    { name: "Quantity", width:"200px" },
    { name: "ProductCode", width: "200px" },
    { name: "Price", width: "200px" }
  ],

    server: {
      url: "https://sunfreshapi.onrender.com/api/v1/inventory/",
      then: (data) => {
        return data.map((wine) => [
          wine.productid, 
          wine.product, 
          wine.description, 
          wine.quantity, 
          wine.productcode, 
          wine.price     
          ]);
      }
    },
  
  }).render(document.getElementById("table"));