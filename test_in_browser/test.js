
import * as combinatorics from "../src/combinatorics";
const {
  range, tail,
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

