Ecwid.OnAPILoaded.add(function() {
    console.log("Version 12 : night time try3");
    var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
    console.log(data);
    data = JSON.parse(data)
    console.log(data);
    
    ec = ec || {};
    ec.order = ec.order || {};
    ec.order.extraFields = ec.order.extraFields || {};
    


    console.log("extraFields");
    console.log(ec.order.extraFields);


    console.log("orderDetailsDisplaySection");
    console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.orderDetailsDisplaySection);
    /*
    function custom_app_33883008_3_my_check(in_date) {
        console.log("custom_app_33883008_3_my_check");
        console.log(in_date);
        for (let j = 0; j < data.length; j++) {
            var blockout_date = new Date();
            blockout_date.setTime(data[j]);
            console.log("comparing")
            console.log(blockout_date)
            if (blockout_date.getDate() == in_date.getDate() && blockout_date.getMonth() == in_date.getMonth() && blockout_date.getFullYear() == in_date.getFullYear()){
                // in_date is blockout_date
                console.log("found a blockout date");
                return [false, "", ""];
            }
        }
        return [true, "", ""];
    }
    */
    
    for (let i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
        var prev_options = ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions;    
        console.log("prev_options");
        console.log(prev_options);
        ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(['2021-12-04 00:00:00', '2021-12-04 23:59:59']);
    }
    /*
    for (let i = 0; i < ec.order.extraFields.ecwid_order_pickup_time.overrides.length; i++) {
        var prev_options = ec.order.extraFields.ecwid_order_pickup_time.overrides[i].fieldsToOverride.datePickerOptions;    
        console.log("prev_options");
        console.log(prev_options);
        ec.order.extraFields.ecwid_order_pickup_time.overrides[i].fieldsToOverride.datePickerOptions.beforeShowDay = custom_app_33883008_3_my_check;
    }
    */
    
    console.log("extraFields after change");
    console.log(ec.order.extraFields);


    //Ecwid.refreshConfig();

});


