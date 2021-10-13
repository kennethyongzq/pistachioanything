console.log("Version 4 : try ACCESSING ARRAY KEY");
var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
console.log(data);

ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {}; 

console.log("extraFields");
console.log(ec.order.extraFields);
var overrides_array = ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides;
console.log("overrides_array");
console.log(overrides_array);

console.log("ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[0]");
console.log(ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[0]);

for (let i = 0; i < overrides_array.length; i++) {
  var prev_options = overrides_array[i].fieldsToOverride.datePickerOptions 
}
console.log("prev_options");
console.log(prev_options);


