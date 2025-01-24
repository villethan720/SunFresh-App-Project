
/*
const formEl33 = document.querySelector('.form2');

formEl33.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl33);
    const data = Object.fromEntries(formData);

    // Check each and display a message if it's not populated
    if (data.first_name == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'First Name must be populated, please add and resubmit' });
    } else if (data.last_name == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Last Name must be populated, please add and resubmit' });
    } else if (data.mobile_phone == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Mobile Phone must be populated, please add and resubmit' });
    } else if (data.email == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Email must be populated, please add and resubmit' });
    } else if (data.item_name == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Item Name must be populated, please add and resubmit' });
    } else if (data.item_code == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Item Code must be populated, please add and resubmit' });
    } else if (data.qty == "") {
        $.toaster({ priority: 'danger', title: 'Error', message: 'Qty must be populated, please add and resubmit' });
    } else {
        // If all fields are populated, proceed with the fetch request
        fetch('http://localhost:3009/api/v1/customers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $.toaster({ priority: 'success', title: 'Customers', message: 'Customer Order Added' });
        })
        .catch(error => {
            console.log(error);
            $.toaster({ priority: 'danger', title: 'Error', message: 'Oops something went wrong and did not save' });
        });
    }
});

*/

const formEl33 = document.querySelector('.form2');

formEl33.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl33);
    const data = Object.fromEntries(formData);

    if(data.first_name == "" || data.last_name == "" || data.mobile_phone == "" || data.email == "" 
    || data.item_name == "" || data.item_code == "" || data.qty == "" ){
        $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'});
    }
    else {
        fetch('https://sunfreshapi.onrender.com/api/v1/customers/', {
        //fetch('http://localhost:3009/api/v1/customers/', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
      $.toaster({ priority :'success', title :'Customers', message :'Customer Order Added'})
      //.catch(error => $.toaster({ priority :'danger', title :'Error', message :'Oops something went wrong and did not save'}))
    }
    
});
