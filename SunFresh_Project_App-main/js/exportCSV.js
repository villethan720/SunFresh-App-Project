//Used To Convert json to csv
const dataToCSV = json2csv.parse(data, {
    header: true,
    delimiter: ',',
    includeEmptyRows: true
  });
  
  //Convert json file to CSV
  const btnCSVDownload = document.getElementById("btnCSVDownload");
  
  btnCSVDownload.addEventListener("click", () => {
    download("dcode-test.csv", json2csv.parse(dataToCSV));
  })
  
  //Download Inventory File to CSV
  function download(fileName, inventoryCSVData)
  {
    const element = document.createElement("a");
  
    element.setAttribute("href", `data:text/csv;charset=utf-8`, {$inventoryCSVData});
    element.setAttribute("download", fileName);
    element.style.display = "none";
  }