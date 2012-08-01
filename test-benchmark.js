// Generate a random array
function generateRandomArray(length, range) {
  var random = [];
  for(var i = 0; i < length; i++) {
    random[i] = Math.floor(Math.random() * range);
  }

  return random;
}

// Default sort() function sorts by alphabetical order
function sortNumber(a,b) { 
  return a - b; 
}

/**
 * Unit Tests
 * -------------------------------------------------- */
test( "QuickSort: Array size = 1", function() {
  var a = [1];
  deepEqual(a.quickSort(), a, "Should return itself");
});

test( "MergeSort: Array size = 1", function() {
  var a = [2];
  deepEqual(a.mergeSort(), a, "Should return itself");
});

test( "InsertionSort: Array size = 1", function() {
  var a = [3];
  deepEqual(a.insertionSort(), a, "Should return itself");
});

test( "InsertionSort: Array size = 1", function() {
  var a = [4];
  deepEqual(a.bubbleSort(), a, "Should return itself");
});

var LENGTH = 1000;
var RANGE = 10000;

test( "QuickSort: Random array", function() {
  random = generateRandomArray(LENGTH, RANGE);
  copy = random.slice(0); // deep copy

  deepEqual(copy.quickSort(), random.sort(sortNumber), "All elements should be the same");
});

test( "MergeSort: Random array", function() {
  random = generateRandomArray(LENGTH, RANGE);
  copy = random.slice(0);

  deepEqual(copy.mergeSort(), random.sort(sortNumber), "All elements should be the same");
});

test( "InsertionSort: Random array", function() {
  var random = generateRandomArray(LENGTH, RANGE);
  copy = random.slice(0);

  deepEqual(copy.insertionSort(), random.sort(sortNumber), "All elements should be the same");
});

test( "BubbleSort: Random array", function() {
  var random = generateRandomArray(LENGTH, RANGE);
  copy = random.slice(0);

  deepEqual(copy.bubbleSort(), random.sort(sortNumber), "All elements should be the same");
});

/**
 * Benchmarks
 * -------------------------------------------------- */
Benchmark.STDOUT = document.getElementById('benchmark');

var COUNT = 1000;
var NUM_COPY = 4;
var randoms = [], copies = [];

// Prepare Data
for(var j = 0; j< NUM_COPY; j++) {
  copies[j] = [];
}
for(var i = 0; i < COUNT; i++) {
  random = generateRandomArray(LENGTH, RANGE);
  randoms.push(random);
  for(var j = 0; j< NUM_COPY; j++) {
    copies[j].push(random.slice(0));
  }
}

// Benchmark!
Benchmark.benchmark({
  NativeSort : function() {
    for(var i = 0; i < COUNT; i++) {
      randoms[i].sort(sortNumber);
    }
  },
  QuickSort : function() {
    for(var i = 0; i < COUNT; i++) {
      copies[0][i].quickSort();
    }
  },
  MergeSort : function() {
    for(var i = 0; i < COUNT; i++) {
      copies[1][i].mergeSort();
    }
  },
  InsertionSort : function() {
    for(var i = 0; i < COUNT; i++) {
      copies[2][i].insertionSort();
    }
  },
  BubbleSort : function() {
    for(var i = 0; i < COUNT; i++) {
      copies[3][i].bubbleSort();
    }
  }
});