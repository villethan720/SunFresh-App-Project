//Gather Year, Month, and Date For PDF File Name
const fileDateInfo = new Date();
const fileYear = fileDateInfo.getFullYear();
const fileMonth = fileDateInfo.getMonth() + 1; //Increment One to get correct month. [0] is January
const fileDate = fileDateInfo.getDate(); 

//Testing Output
console.log(fileYear + "_" + fileMonth + "_" + fileDate);

//PDF Function
  function generatePDF() {
        
        // Choose the element id which you want to export.
        var element = document.getElementById('divExport');
        var fileName = {
            filename:     `${fileYear}"_"${fileMonth}"_"${fileDate} ShipmentExports.pdf`, fileYear,
            htmlView:  { scale: 1 },
          };
        
        // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
        htmlView().set(fileName).from(element).save();
      }