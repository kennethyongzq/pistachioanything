// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'How should we sign the package?' to shipping address form
ec.order.extraFields.additional_remarks = {
    'title': 'Additional Remarks',
    'textPlaceholder': 'Additional remarks',
    'type': 'text',
    'tip': '',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

Ecwid.refreshConfig();
