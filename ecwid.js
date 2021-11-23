function update_blockout_dates(cart_dict){
    console.log("update_blockout_dates");
    console.log("Version 3.7");
    var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
    console.log(data);
    data = JSON.parse(data)
    data = data['blockout_dates'];
    console.log(data);

    // Processing cart products to see if need to block out any epochs
    /*
    var inv_data = data['inv'];
    var list_of_epochs = [];
    Object.keys(cart_dict).forEach(function(key) {
        console.log(key, cart_dict[key]);
        var c_pid = key;
        var c_qty = cart_dict[key];
        for (var j = 0 ; j < inv_data.length ; j++){
            var i_epoch = inv_data[j]['epoch'];
            var i_pid = inv_data[j]['pid'];
            var i_qty = inv_data[j]['qty'];

            if (i_pid == c_pid){
                console.log("There exist an item in cart that has inventory data");
                console.log(i_pid);
            }
        }
    });
    */
    
    ec = ec || {};
    ec.order = ec.order || {};
    ec.order.extraFields = ec.order.extraFields || {};



    console.log("extraFields");
    console.log(ec.order.extraFields);

    for (var i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
        for (var j = 0; j < data.length; j++) {
            var blockout_date = new Date();
            blockout_date.setTime(data[j]);
            var array_to_append = new Array(blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 00:00:00", blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 23:59:59");
            ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(array_to_append);
        }
    }
    for (var i = 0; i < ec.order.extraFields.ecwid_order_pickup_time.overrides.length; i++) {
        for (var j = 0; j < data.length; j++) {
            var blockout_date = new Date();
            blockout_date.setTime(data[j]);
            var array_to_append = new Array(blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 00:00:00", blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 23:59:59");
            ec.order.extraFields.ecwid_order_pickup_time.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(array_to_append);
        }
    }


    console.log("extraFields after change");
    console.log(ec.order.extraFields);


    Ecwid.refreshConfig();        
}
function convertCartToPidQtyDict(cart){
    console.log("convertCartToPidQtyDict");
    var dict = {}
    for (var i = 0 ; i < cart.items.length ; i++){
        var item = cart.items[i];
        var qty = item.quantity;
        var pid = item.product.id;
        if (!(pid in dict)){
            dict[pid] = 0
        }
        dict[pid] += qty;
    }
    console.log(dict);
    return dict;
}

Ecwid.OnCartChanged.add(function(cart){
    console.log("OnCartChanged");
    var dict = convertCartToPidQtyDict(cart);
    update_blockout_dates(dict);
});

Ecwid.OnPageLoad.add(function(page) {
    console.log("OnPageLoad");
    console.log("Current page is of type: " + page.type);
});

Ecwid.OnPageLoaded.add(function(page) {
    console.log("OnPageLoaded");
    Ecwid.Cart.get(function(cart){
        var dict = convertCartToPidQtyDict(cart);
        update_blockout_dates(dict);    
    });

    
});


