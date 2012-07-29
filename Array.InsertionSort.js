/**
 * Insertion Sort Javascript implementation
 *  - Best: n / Average: n^2 / Worst: n^2
 *  - Memory: 1 / Stable
 *
 * @author: Sebastian Kim
 */

Array.prototype.insertionSort = function() {
  for(var i = 1; i < this.length; i++) {
    var hole = i;
    while (hole > 0 && this[hole - 1] > this[i]) {
      hole--;
    }
    this.splice(hole, 0, this[i]);
    this.splice(i + 1, 1);
  }

  return this;
}