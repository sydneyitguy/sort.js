/**
 * Bubble Sort Javascript implementation
 *  - Best: n / Average: n^2 / Worst: n^2
 *  - Memory: 1 / Stable
 *
 * @author: Sebastian Kim
 */

Array.prototype.bubbleSort = function() {
  n = this.length;

  while (n > 0) {
    var newn = 0;
    for(var i = 1; i < n; i++) {
      if(this[i - 1] > this[i]) {
        // Swap
        tmp = this[i];
        this[i] = this[i - 1];
        this[i - 1] = tmp;

        newn = i;
      }
    }
    n = newn;
  }

  return this;
}