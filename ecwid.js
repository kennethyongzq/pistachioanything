console.log("Version 6 : {}");
var data = Ecwid.getAppPublicConfig('custom-app-33883008-3');
console.log(data);

ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};
ec.order.extraFields.ecwid_order_delivery_time_interval_start = ec.order.extraFields.ecwid_order_delivery_time_interval_start || {};
console.log("extraFields");
console.log(ec.order.extraFields);

for (let i = 0; i < ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides.length; i++) {
  var prev_options = ec.order.extraFields.ecwid_order_delivery_time_interval_start.overrides[i].fieldsToOverride.datePickerOptions;
}
console.log("prev_options");
console.log(prev_options);


