Array.prototype.uniq = function() {

  let new_array = [];
  this.forEach (function(el)  {
    if (new_array.includes(el)) {

    }
    else {
      new_array.push(el);
    };
  });
  return new_array;
}

console.log([1,2,3,3,3,5].uniq());


Array.prototype.two_sum = function() {
  let two_sums = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0 && i !== j) {
        two_sums.push([i,j]);
      }
    }
  }
  return two_sums;
}
console.log([-1, 0, 2, -2, 1].two_sum());


Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
    transposed.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      transposed[i].push(this[j][i])
    }
  }
  return transposed;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
