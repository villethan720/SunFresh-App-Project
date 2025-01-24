const options = {
    margin:       0.5,  // Margins
    filename:    `${fileYear}"_"${fileMonth}"_"${fileDate} `,  // Filename 
    image:        { type: 'jpeg', quality: 0.95 },  // Quality
    html2canvas:  { dpi: 192, scale: 2 },  // Resolution
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }  // PDF Format
};
