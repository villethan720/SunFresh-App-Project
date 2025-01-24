//Gather Year, Month, and Date For PDF File Name
const fileDateInfo = new Date();
const fileYear = fileDateInfo.getFullYear();
const fileMonth = fileDateInfo.getMonth() + 1; //Increment One to get correct month. [0] is January
const fileDate = fileDateInfo.getDate(); 

//Testing Output
console.log(fileYear + "_" + fileMonth + "_" + fileDate);