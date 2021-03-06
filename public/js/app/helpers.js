/**
* public/js/app/helpers.js
* -
* Handlebars helper methods
*/

/**
* Replace null value with dashes
*/
Ember.Handlebars.helper('dashes', function(value, opts) {
  if (value !== null) {
    return value;
  }
  
  return '--';
});

/**
* Converts number value '1839048' into '1,839,048'
*/
Ember.Handlebars.helper('withCommas', function(value, opts) {
  if (value !== null) {
    var parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
  }
  
  return '--';
});

/**
* Converts currency value '18392.99' into '$18,392.99'
*/
Ember.Handlebars.helper('currency', function(value, opts) {
  if (value !== null) {
    var parts = value.toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return '$' + parts.join(".");
  }
  
  return '--';
});

/**
* Converts time value '10:39am' into '10:39 AM'
*/
Ember.Handlebars.helper('time', function(value, opts) {
  if (value !== null) {
    var val = value.toString().toUpperCase();

    // Insert space in between number and capital letter
    val = val.replace(/([0-9])([A-Z])/g, '$1 $2');

    return val + ' EDT';
  }

  return '--';
});

Ember.Handlebars.helper('firstLetter', function(value, opts) {
  if (value !== null) {
    return value.toString().charAt(0).toUpperCase();
  }
  
  return '--';
});

/**
* Truncate a long string into an ellipsed string
*/
Ember.Handlebars.helper('truncate', function(length, value, opts) {
  if (value !== null) {
    if (value.length <= length) {
      return value;
    }
    
    return value.substring(0, length) + '...';
  }
  
  return '--';
});

/**
* Convert decimal value into percentage; (eg. 0.12 -> 12%)
*/
Ember.Handlebars.helper('percent', function(value, opts) {
  if (value !== null) {
    var percent = value * 100;
    
    return percent + '%';
  }
  
  return '--';
});

/**
* Multiply two values
*/
Ember.Handlebars.helper('multiply', function(a, b, opts) {
  if (a !== null && b !== null) {
    var product = a * b;

    return product.toFixed(2);
  }
  
  return '--';
});

/**
* Add two values
*/
Ember.Handlebars.helper('add', function(a, b, opts) {
  if (a !== null && b !== null) {
    var sum = parseFloat(a) + parseFloat(b);

    return sum.toFixed(2);
  }
  
  return '--';
});

/**
* Format a date
*/
Ember.Handlebars.helper('date', function(value) {
  if (value !== null) {
    var date = new Date(value),
        options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };

    return date.toLocaleDateString('en-us', options);
  }

  return '--';
});