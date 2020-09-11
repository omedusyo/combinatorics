
import { range, head, tail } from "../src/helpers";

// TODO: this is here because I use generators/iterators/yield
// import 'regenerator-runtime/runtime'; 
import 'regenerator-runtime/runtime'; 

import * as combinatorics from "../src/combinatorics";
const {
  numOfCombinations,
  combinations,
} = combinatorics;


window.combinatorics = combinatorics;

function assert(bool, str="") {
  if (bool) {
    console.log(`${str}: OK`);
  } else {
    console.log(`${str}: FAILURE`);
  }
}
function test(name) {
  console.log("====================");
  console.log(`Testing ${name}`);
}
function stop() {
  throw Error("STOP");
}


function eqStrict(x, y) {
  return x === y;
}

// Watch out for nested arrays
function eqarray(xs, ys, eq=eqStrict) {
  let n = xs.length;
  if (n != ys.length) {
    return false;
  }
  
  for (let i = 0; i < n; i++) {
    if (!(eq(xs[i], ys[i]))) {
      return false;
    }
  }
  return true;
}

// TESTS
test("range(a, b)");
assert(eqarray(range(0, 5), [0,1,2,3,4]));
assert(eqarray(range(0, 0), []));
assert(eqarray(range(0, 1), [0]));
assert(eqarray(range(0, -5), []));
assert(eqarray(range(2, 6), [2,3,4,5]));
assert(eqarray(range(2, 2), []));

test("tail(xs)");
assert(eqarray(tail([1,2,3]), [2,3]));

test("numOfCombinations(setLength, n)");
assert(numOfCombinations(10, 5) == 252);
assert(numOfCombinations(5, 0) == 1);
assert(numOfCombinations(5, 1) == 5);
assert(numOfCombinations(5, 2) == 10);
assert(numOfCombinations(5, 3) == 10);
assert(numOfCombinations(5, 4) == 5);
assert(numOfCombinations(5, 5) == 1);
assert(numOfCombinations(0, 0) == 1);
assert(numOfCombinations(0, 5) == 0);
assert(numOfCombinations(1, 0) == 1);
assert(numOfCombinations(1, 1) == 1);
assert(numOfCombinations(1, 2) == 0);

test("combinations(set: Array(a), n: Nat)");
// combinations(set: Array(a), n: Nat): Iterator(Array(a))
console.log(Array.from(combinations([1,2,3], 2)));
assert(
  eqarray(
    Array.from(combinations([1,2,3], 0)),
    [[]], eqarray
  )
);
assert(
  eqarray(
    Array.from(combinations([1,2,3], 1)),
    [[1], [2], [3]], eqarray
  )
);
assert(
  eqarray(
    Array.from(combinations([1,2,3], 2)),
    [[1,2], [1,3], [2,3]], eqarray
  )
);
assert(
  eqarray(
    Array.from(combinations([1,2,3], 3)),
    [[1,2,3]], eqarray
  )
);

// TODO

