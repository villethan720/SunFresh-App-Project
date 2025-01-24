new gridjs.Grid({
  search: true,
  sort: true,
  pagination: true,
  fixedHeader: true,
  height: "90%",
  maxwidth: "100%",



    
    
  columns: [
    { name: "ShipmentID", width: "200px" },
    { name: "Shipper", width: "200px" },
    { name: "Carrier", width: "200px" },
    { name: "Load Date", width:"200px", formatter: formatDate },
    { name: "Ship Date", width: "200px", formatter: formatDate},
    { name: "Expected Date", width: "200px", formatter: formatDate },
    { name: "Status", width: "200px" },
    { name: "Arrival Date", width: "200px", formatter: formatDate},
    { name: "Date Revised", width: "200px", formatter: formatDate },
    { name: "Notes", width: "200px" }  ],

    server: {
      url: "https://sunfreshapi.onrender.com/api/v1/shipments/",
      then: (data) => {
        data.sort((a, b) => b.shipment_id - a.shipment_id);
        return data.map((wine) => [
          wine.shipment_id,       
          wine.shipper,        
          wine.carrier,        
          wine.load_date,        
          wine.ship_date,        
          wine.expected_date,        
          wine.status,        
          wine.arrival_date,       
          wine.date_revised,        
          wine.notes      
          ]);
      }
    },
  
  }).render(document.getElementById("table"));


  //Date Formater
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${month}-${day}-${year}`;
  }