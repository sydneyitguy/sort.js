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
test( "When array size = 1", function() {
  var a = [1];
  deepEqual(a.quickSort(), a, "Quick Sort");
  deepEqual(a.mergeSort(), a, "Merge Sort");
  deepEqual(a.insertionSort(), a, "Insertion Sort");
  deepEqual(a.bubbleSort(), a, "Bubble Sort");
});

var LENGTH = 1000;
var RANGE = 10000;

test( "Sort a random array", function() {
  var random = generateRandomArray(LENGTH, RANGE);
  var copy = random.slice(0); // deep copy
  var copy2 = random.slice(0);
  deepEqual(copy.quickSort(), copy2.sort(sortNumber), "Quick Sort");

  copy = random.slice(0);
  copy2 = random.slice(0);
  deepEqual(copy.mergeSort(), copy2.sort(sortNumber), "Merge Sort");

  copy = random.slice(0);
  copy2 = random.slice(0);
  deepEqual(copy.insertionSort(), copy2.sort(sortNumber), "Insertion Sort");

  copy = random.slice(0);
  copy2 = random.slice(0);
  deepEqual(copy.bubbleSort(), copy2.sort(sortNumber), "Bubble Sort");
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