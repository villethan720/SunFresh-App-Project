new gridjs.Grid({
  columns: ["Order Number", "Customer Name", "Item Desc","Qty","Cost","Ship Date","Arrival Date","Status"],
  sort: true,
  search: true,
  pagination: {
    limit: 10
  },
  autowidth: true,
  data: [
    //call to fetch data from the api
    //call gets the data from the api return statement
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2022","9/17/2022","Active"],
    ["103", "JFK Winery","Grapes","4","270.00","9/15/2022","9/17/2022","Active"],
    ["104", "Mingo Winery","Grapes","4","574.45","9/15/2022","9/17/2022","Active"],
    ["105", "Jeff S","Grapes","4","1270.00","9/15/2022","9/17/2022","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2021","9/17/2021","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2021","9/17/2021","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2021","9/17/2021","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2020","9/17/2020","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2020","9/17/2020","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2020","9/17/2020","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2019","9/17/2019","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2019","9/17/2019","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2018","9/17/2018","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2018","9/17/2018","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2017","9/17/2017","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2017","9/17/2017","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2016","9/17/2016","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2016","9/17/2016","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2016","9/17/2016","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2016","9/17/2016","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2015","9/17/2015","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2015","9/17/2015","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2015","9/17/2015","Active"],
    ["102", "Lookout Winery","Grapes","4","270.00","9/15/2015","9/17/2015","Active"],
  ],
  language: {
    'search': {
      'placeholder': '🔍 Search...'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '😃 Displaying',
      'results': () => 'Records'
    }
  }
}).render(document.getElementById("wrapper"));

//Function to access the gridview
function searchyear(paramyear){

  /*
  var filterData = (data, year) => {
    //filter method
    return data.filter((item) => {
        var itemYear = new Date(item.date).getFullYear();// Get the year from the date of the current item
        return itemYear === year;
    });
  };

  var filteredData = filterData(data, 2021);
  console.log(filteredData);
  */
 console.log(paramyear);
};