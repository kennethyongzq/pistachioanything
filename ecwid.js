function update_blockout_dates(){
    console.log("update_blockout_dates");
    console.log("Version 1 : 14 OCT 2021");
    var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
    console.log(data);
    data = JSON.parse(data)
    console.log(data);

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

Ecwid.OnCartChanged.add(function(cart){
    update_blockout_dates();
});

Ecwid.OnPageLoad.add(function(page) {
    console.log("OnPageLoad");
    console.log("Current page is of type: " + page.type);
});

Ecwid.OnPageLoaded.add(function(page) {
    console.log("OnPageLoaded");
    update_blockout_dates();    
    
});


