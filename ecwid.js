Ecwid.OnPageLoaded.add(function(page) {
    console.log("OnPageLoaded");
    if (page.type == "CHECKOUT_DELIVERY") {
        console.log("Version 15 : try to refresh config after push");
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
        

        console.log("Ecwid.Array");
        console.log(Ecwid.Array);
        /*
        for (var i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
            console.log("2");
            var prev_options = ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions;    
            console.log("prev_options");
            console.log(prev_options);
            console.log("original disallowDates");
            console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions.disallowDates);
            ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions.disallowDates.push(['2021-12-04 00:00:00', '2021-12-04 23:59:59']);
        }
        console.log("3");
        */    
        console.log("extraFields after change");
        console.log(ec.order.extraFields);


        Ecwid.refreshConfig();
    }
});


