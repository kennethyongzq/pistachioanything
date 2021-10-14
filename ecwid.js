Ecwid.OnCartChanged.add(function(cart){
    console.log("OnCartChanged");
    console.log("Version 17 : move code to OnCartChanged");
    var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
    console.log(data);
    data = JSON.parse(data)
    console.log(data);

    ec = ec || {};
    ec.order = ec.order || {};
    ec.order.extraFields = ec.order.extraFields || {};



    console.log("extraFields");
    console.log(ec.order.extraFields);

    /*
    console.log("orderDetailsDisplaySection");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.orderDetailsDisplaySection);
    console.log("overrides");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides);
    console.log("overrides,length");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length);
    console.log("overrides0,fields to override");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[0].fieldsToOverride);
    console.log("overrides0,fields to override,datePickerOptions");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[0].fieldsToOverride.datePickerOptions);
    console.log("overrides0,fields to override,datePickerOptions,disallowDates");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[1].fieldsToOverride.datePickerOptions.disallowDates);
    var array_to_append = new Array('2021-12-04 00:00:00', '2021-12-04 23:59:59');
    console.log("array_to_append");
    console.log(array_to_append);

    console.log("overrides0,fields to override,datePickerOptions,disallowDates, after push");
    ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[1].fieldsToOverride.datePickerOptions.disallowDates.push(array_to_append);
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[1].fieldsToOverride.datePickerOptions.disallowDates);
    */



    for (var i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
        for (var j = 0; j < data.length; j++) {
            var blockout_date = new Date();
            blockout_date.setTime(data[j]);
            console.log("adding blockout_date")
            console.log(blockout_date)
            var array_to_append = new Array(blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 00:00:00", blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 23:59:59");
            console.log("array_to_append");
            console.log(array_to_append);
            ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(array_to_append);
        }
    }
    for (var i = 0; i < ec.order.extraFields.ecwid_order_pickup_time.overrides.length; i++) {
        for (var j = 0; j < data.length; j++) {
            var blockout_date = new Date();
            blockout_date.setTime(data[j]);
            console.log("adding blockout_date")
            console.log(blockout_date)
            var array_to_append = new Array(blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 00:00:00", blockout_date.getFullYear() + "-" + String(blockout_date.getMonth()+1).padStart(2, '0') + "-" + String(blockout_date.getDate()).padStart(2, '0') + " 23:59:59");
            console.log("array_to_append");
            console.log(array_to_append);
            ec.order.extraFields.ecwid_order_pickup_time.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(array_to_append);
        }
    }


    console.log("extraFields after change");
    console.log(ec.order.extraFields);


    Ecwid.refreshConfig();
});

Ecwid.OnPageLoad.add(function(page) {
    console.log("OnPageLoad");
    console.log("Current page is of type: " + page.type);
});

Ecwid.OnPageLoaded.add(function(page) {
    console.log("OnPageLoaded");
    if (page.type == "CHECKOUT_DELIVERY") {
        
    }
});


