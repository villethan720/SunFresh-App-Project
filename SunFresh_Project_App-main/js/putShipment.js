const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(
    data.shipment_id == "" 
    || data.shipper == "" 
	|| data.carrier == "" 
	|| data.load_date == "" 
	|| data.ship_date == "" 
    || data.expected_date == "" 
	|| data.status == "" 
	|| data.arrival_date == ""  
	|| data.date_revised == ""  
    || data.notes == "" 
	){
        $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'});
    }
    else {
        fetch('https://sunfreshapi.onrender.com/api/v1/shipments/'+ data.shipment_id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
      $.toaster({ priority :'success', title :'Shipments', message :'Shipment Order Modified'})
      //.catch(error => $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'}))
    }

});