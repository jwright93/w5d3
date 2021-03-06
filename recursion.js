function range(start, end) {
  if (start > end) {
    return [];
  }
  return [start].concat(range(start+1, end));
}

// console.log(range(1,10));

function recuresiveSum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + recuresiveSum(array.slice(1,array.length));
}


// console.log(recuresiveSum([1,2,3]));

function iterativeSum(array) {
  let sum = 0;

  array.forEach(function(el) {
    sum += el;
  });
  return sum;
}

// console.log(iterativeSum([1,2,3]));


function exponentiate(base, ex) {
  if (ex === 0) { return 1; }

  return base * exponentiate(base, ex -1);
}

// console.log(exponentiate(2,3));

function fibbonacci(number) {
  if (number === 0) { return []; }
  if (number === 1) { return [1]; }
  if (number === 2) { return [1, 1]; }
  let lastFib = fibbonacci(number - 1);
  let length = lastFib.length;
  return lastFib.concat([lastFib[length - 1] + lastFib[length - 2]]);
}

// console.log(fibbonacci(7));

Array.prototype.bSearch = function(value) {

  if (this.length === 0) { return null; }

  let middle = Math.floor(this.length / 2);
  let middleValue = this[middle];

  if (value > middleValue) {
    let upperBSearch = this.slice(middle + 1, this.length).bSearch(value);
    return (upperBSearch === null) ? null : middle + 1 + upperBSearch;
  }
  else if (value < middleValue) {
    let lowerBSearch = this.slice(0, middle).bSearch(value);
    return lowerBSearch;
  }
  else if (value === middleValue) {
    return middle;
  }

};

// console.log([0, 1,2,3,4,5,6,7,8,9].bSearch(0));


Array.prototype.mergeSort = function() {
  if (this.length === 1 || this.length === 0) {
    return this;
  }
  let middle = Math.floor(this.length/2);
  let sortedLeft = this.slice(0, middle).mergeSort();
  let sortedRight = this.slice(middle, this.length).mergeSort();

  return merge(sortedLeft, sortedRight);
};

function merge(array1, array2) {
  let merged = [];
  // console.log(array1);
  // console.log(array2);

  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] > array2[0]) {
      merged.push(array2.shift());
    }
    else {
      merged.push(array1.shift());
    }
  }

  return merged.concat(array1).concat(array2);
}

console.log([3,2346,23,7,27,2,52].mergeSort());
// console.log(merge([1,5,78], [10,11,490]));
