Array.prototype.each = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }

  return this;
}

// console.log([1,2,3].each(square));
//
//
// function square(number) {
//   console.log(number);
// }

Array.prototype.map = function(callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
}


// console.log([1,2,3].map(square));


function square(number) {
  return number*number
}


Array.prototype.inject = function(callback, initialValue = null) {
  if (initialValue === null) {
    this.each(function(el) {
      initialValue = callback(initialValue, el);
    });
  }
  else {
    let shorter_array = this[1,-1];
    shorter_array.each(function(el) {
      initialValue = callback(initialValue, el);
    });
  }
  return initialValue;
}

function add(a, b) {
    return a + b;
}

// console.log([1,2,3,4].inject(add));


Array.prototype.mySelect = function(callback) {
  let selected = [];
  this.each(function(el){
    if (callback(el)) {
      selected.push(el);
    }
  });
  return selected;
}


// console.log([1,2,3,4,5,6].mySelect(odd));

function odd(number) {
  if (number % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}


Array.prototype.count = function() {
  let counter = 0;
  this.each(() => {
    counter++;
  });
  return counter;
}


// console.log([1,2,3,4,5].count());
