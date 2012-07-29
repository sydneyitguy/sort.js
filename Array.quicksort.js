/**
 * QuickSort Javascript implementation
 *  - Pivot: choosing the middle index of the partition
 *  - Best: nlog(n) / Average: nlog(n) / Worst: n^2
 *  - Memory: log(n) / Not stable
 *
 * @author: Sebastian Kim
 */

Array.prototype.swap = function(i, j) {
  var tmp = this[i];
  this[i] = this[j];
  this[j] = tmp;
}

function partition(A, p, q, r) {
  var pivot = A[r];
  A.swap(r, p);
  var i = p;

  for(var j = p + 1; j <= q; ++j) {
    if(A[j] <= pivot) {
      A.swap(++i, j);
    }
  }
  A.swap(p, i);

  return i;
}


function quicksort(A, p, q)
{
  if(p < q) {
    var r = Math.floor(p + (q - p) / 2); // Prevent integer overflow
    r = partition(A, p, q, r);
    quicksort(A, p, r - 1);
    quicksort(A, r + 1, q);
  }

  return A;
}

Array.prototype.quickSort = function() {
  return quicksort(this, 0, this.length - 1);
}
