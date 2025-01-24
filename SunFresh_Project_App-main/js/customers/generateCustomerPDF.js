//Gather Year, Month, and Date For PDF File Name
const fileDateInfo = new Date();
const fileYear = fileDateInfo.getFullYear();
const fileMonth = fileDateInfo.getMonth() + 1 ;
const fileDate = fileDateInfo.getDate(); 


console.log(fileYear + "_" + fileMonth + "_" + fileDate);


  function generatePDF() {
        
        // Choose the element id which you want to export.
        var element = document.getElementById('divExport');
        var format = {
            margin:       0.5,
            filename:     `${fileYear}"_"${fileMonth}"_"${fileDate} CustomerOrders.pdf`, fileYear,
            html2canvas:  { scale: 1 },
          };
        
        // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
        html2pdf().set(format).from(element).save();
      }