'use strict';

var data;

if (typeof window !== 'undefined') {
  data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
}

module.exports = function(d) {
  if (d) data = d;
  return data;
};

