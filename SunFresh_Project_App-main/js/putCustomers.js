const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(data.customers_id == "" 
	|| data.first_name == "" 
	|| data.last_name == "" 
	|| data.mobile_phone == "" 
    || data.email == "" 
	|| data.item_name == "" 
	|| data.item_code == ""  
	|| data.tax_exempt == ""  
    || data.status == ""
    || data.notes == "" 
	){
        $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'});
    }
    else {
        fetch('https://sunfreshapi.onrender.com/api/v1/customers/' + data.customers_id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
      $.toaster({ priority :'success', title :'Shipments', message :'Customers Order Updated'})
      //.catch(error => $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'}))
    }
    
});