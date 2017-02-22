Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      let j = i + 1;
      if (this[i] > this[j]) {
        let placeholder = this[i];
        this[i] = this[j];
        this[j] = placeholder;
        sorted = false;
      }
    }
  }
  return this;
}

// console.log([4,2,5,1,6,3,61].bubbleSort());

String.prototype.subStrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i,j));
    }
  }
  return substrings
}

console.log("cat".subStrings());
