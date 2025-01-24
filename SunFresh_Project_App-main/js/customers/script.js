document.addEventListener('DOMContentLoaded', function() {
    // Attach the input event listener after the DOM is fully loaded
    document.getElementById('txtqty').addEventListener('input', function(event) {
        // The action you want to trigger
        console.log('New value:', event.target.value);
        // You can call your specific function here
        yourFunction(event.target.value);
    });
});

function yourFunction(value) {
    // Your custom logic with the new value
    //txttotalamt.value = txtprice.value * txtqty.value * txttaxpercent.value;
    //document.getElementById("new").value = 23;
    /*
    var tax = (taxpercent.value / 100);
    var itemprice = price.value.replace("$", "");
    var convertedprice = parseFloat(itemprice);
    var qtyselected = (convertedprice * qty.value);
    var itemtax = (qtyselected * tax) + qtyselected;
    var nettotal = parseFloat(itemtax);
    var finaltotal = Math.round(nettotal * 10) / 10;
    totalamt.value = finaltotal;
    */

    //new stuff
    // Parse the input values as floats
    
    
    var itemprice = txtprice.value.replace("$", "");
    var price_ = itemprice

    var tax_ = parseFloat(txttaxpercent.value) / 100;
    var qty_ = parseFloat(txtqty.value);

    // Check if any value is NaN (i.e., parsing failed)
    if (isNaN(tax_) || isNaN(qty_) || isNaN(price_)) {
        console.error("One or more inputs are not valid numbers.");
    } else {
    // Calculate the total value if all inputs are valid
    var totalValue = price_ * qty_ * (1 + tax_);
    
    document.getElementById("txttotalamt").value = totalValue;





}
}