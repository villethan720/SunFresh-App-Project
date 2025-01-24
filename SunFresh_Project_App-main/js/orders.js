new gridjs.Grid({
  search: true,
  sort: true,
  pagination: true,
  fixedHeader: true,
  height: "90%",

  columns: [
    { name: "Order ID", width: "200px" },
    { name: "Customer Name", width: "200px" },
    { name: "Product", width: "200px" },
    { name: "Quantity", width: "200px" },
    { name: "Total Price", width: "200px" },
    { name: "Status", width: "200px" }
  ],

  server: {
    url: "https://sunfreshapi.onrender.com/api/orders", // Update to actual API endpoint
    then: (data) => {
      return data.map((order) => [
        order.id, 
        order.customerName, 
        order.product, 
        order.quantity, 
        order.totalPrice, 
        order.status
      ]);
    }
  },

}).render(document.getElementById("table"));
