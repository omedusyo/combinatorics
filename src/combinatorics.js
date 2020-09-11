//
// TODO: this is here because I use generators/iterators/yield
import 'regenerator-runtime/runtime'; 

import { range, head, tail } from "./helpers";

// example.
//  > prepend('a', [[1,2], [101,102]])
// ~> [['a',1,2], ['a',101, 102]]
//
// prepend(a: a, xss: Generator(Iterator(b))): Iterator([a | b])
function* prepend(a, xss) {
  for (let xs of xss) {
    yield [a, ...xs];
  }
}

// example.
//  > prepend('a', [[1,2], [101,102]], 3)
// ~> [['a','a','a',1,2], ['a','a','a',101, 102]]
//
// prependNTimes(a:a, xss: Generator(Iterator(b)), n: Nat): Iterator([a | b])
function* prependNTimes(a, xss, n) {
  let as = (new Array(n)).fill(a);
  for (let xs of xss) {
    yield [...as, ...xs];
  }
}


// TODO: figure out why there is numOfCombinations and C
// Computes m choose n
// numOfCombinations(m: Nat, n: Nat): Nat
export function numOfCombinations(setLength, n) {
  if (n === 0) {
    return 1;
  } else if (setLength === 0) {
    // Note n > 0.
    return 0;
  } else {
    // Note setLength, n > 0.
    let sum = 0;
    for (let i = n - 1; i < setLength; i++) {
      sum += numOfCombinations(i, n - 1);
    }
    return sum;
  }
}

// TODO: delete
// Computes m choose n
// : Nat * Nat -> Nat
export function C(setLength, n) {
  if (n === 0) {
    return 1;
  } else if (setLength === 0) {
    // Note n > 0.
    return 0;
  } else {
    // Note setLength, n > 0.
    let sum = 0;
    for (let i = n - 1; i < setLength; i++) {
      sum += C(i, n - 1);
    }
    return sum;
  }
}

// example.
//  > rightSubarrays(['a', 'b', 'c'])
// ~> [{focus: 'a', shadows: ['b', 'c']},
//    {focus: 'b', shadows:      ['c']},
//    {focus: 'c', shadows:         []}]
//
// focusedRightSubarrays(xs: Array(a)): Iterator(Array(a))
function* focusedRightSubarrays(xs) {
  for (let i = 0; i < xs.length; i++) {
    yield [ xs[i], xs.slice(i + 1) ];
  }
}

// enumerates all combinations of @set of length @n
// example.
//  > combinations([1, 2, 3, 4, 5], 3)
// ~> [[1, 2, 3], [1, 2, 4], [1, 2, 5],
//                [1, 3, 4], [1, 3, 5],
//                           [1, 4, 5],
//     [2, 3, 4], [2, 3, 5],
//                [2, 4, 5],
//     [3, 4, 5]]
//
// combinations(set: Array(a), n: Nat): Iterator(Array(a))
export function* combinations(set, n) {
  if (n === 0) {
    yield [];
  } else if (n === set.length) {
    yield set;
  } else if (n < set.length) {
    // We have
    //   0 < n < set.length
    // Note that during the cycle n is constant.
    for (let [x, right] of focusedRightSubarrays(set)) {
      if (n - 1 === right.length) {
        // yield set;
        yield [x, ...right];

        // Since right.length is decreasing with each cycle,
        // we don't need to go further.
        break;
      } else if (n - 1 < right.length) {
        yield* prepend(x, combinations(right, n - 1));
      }
      // Here  n - 1 > right.length, so we yield nothing.
    }
  }
  // Here n > set.length, so we yield nothing.
}


// tuples(set: Array(a), n : Nat): Iterator(Array(a))
export function* tuples(set, n) {
  if (n === 0) {
    yield [];
  } else if (0 < set.length) {
    for (let x of set) {
      yield* prepend(x, tuples(set, n - 1));
    }
  }
}

// numOfTuples(m: Nat, n : Nat): Nat
export function numOfTuples(m, n) {
  return m**n;
}


// numOfPermutations(m: Nat, n : Nat): Nat
export function numOfPermutations(m, n) {
  if (n <= m) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= m - i;
    }
    return product;
  } else {
    // here m > n
    return 0;
  }
}

// example.
//  > pinchAt(['a','b','c','d'], 2)
// ~> ['a', 'b', 'd']
//
// pinchAt(xs: Array(a), n: Nat): Array(a)
function pinchAt(xs, n) {
  if (xs.length === 0 || xs.length <= n) {
    return undefined;
  } else {
    let ys = [];
    for (let i = 0; i < xs.length; i++) {
      if (i !== n) {
        ys.push(xs[i]);
      }
    }
    return ys;
  }
}

// example.
//  > foci(['a','b','c')
// ~> Iter[['a', ['b','c']],
//         ['b', ['a','c']],
//         ['c', ['a','b']]]
function* foci(xs) {
  for (let i = 0; i < xs.length; i++) {
    yield [ xs[i], pinchAt(xs, i) ];
  }
}

// permutations(set: Array(a), n: Nat): Iterator(Array(a))
export function* permutations(set, n) {
  if (n === 0) {
    yield [];
  } else if (n <= set.length) {
    for (let [x, complement] of foci(set)) {
      yield* prepend(x, permutations(complement, n - 1));
    };
  }
}


// numOfMultisets(m: Nat, n : Nat): Nat
export function numOfMultisets(m, n) {
  function mutate(xs) {
    for (var i = 1; i < xs.length; i++) {
      xs[i] = xs[i - 1] + xs[i];
    }
  }
  if (m === 0) {
    return n === 0 ? 1 : 0;
  } else if (m === 1) {
    return 1;
  } else {
    let xs = range(1, n + 2);
    // m mutations
    for (let i = 0; i < m - 2; i++) {
      mutate(xs);
    }
    return xs[n];
  }
}

// multisets(set: Array(a), n: Nat): Iterator(Array(a))
export function* multisets(set, n) {
  if (n === 0) {
    yield [];
  } else if (0 < set.length) {
    let [x, rest] = [head(set), tail(set)];
    for (let i = 0; i < n; i++) {
      yield* prependNTimes(x, multisets(rest, i), n - i);
    }
    yield* multisets(rest, n);
  }
}

