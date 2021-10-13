console.log("Version 5 : {}");
var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
console.log(data);

ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {}; 
ec.order.extraFields.ecwid_order_delivery_time_interval_start = ec.order.extraFields.ecwid_order_delivery_time_interval_start || {}; 
ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides = ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides || {}; 

console.log("extraFields");
console.log(ec.order.extraFields);

for (let i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
  var prev_options = overrides_array[i].fieldsToOverride.datePickerOptions;
}
console.log("prev_options");
console.log(prev_options);


