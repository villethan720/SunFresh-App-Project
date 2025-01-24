const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(data.description == "" || data.quantity == "" || data.productcode == "" || data.price == "" ){
        $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'});
    }
    else {
        fetch('https://sunfreshapi.onrender.com/api/v1/inventory/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
      $.toaster({ priority :'success', title :'Inventory', message :'Item Added to Inventory'})
      //.catch(error => $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'}))
    }
    
});

