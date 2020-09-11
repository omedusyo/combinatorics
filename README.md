
# Description
Library for enumerating elementary combinatorial structures (subsets, multisubsets, permutations, tuples).

# Installation & Use
```
npm install https://github.com/omedusyo/combinatorics.git
```
then
```
import {
  combinations, numOfCombinations,
  tuples, numOfTuples,
  permutations, numOfPermutations,
  multisets, numOfMultisets,
} from "combinatorics";
```

# Trying the library out in a browser console
Install dependencies ([parcel](https://parceljs.org/))
```
git clone https://github.com/omedusyo/combinatorics.git
cd combinatorics
npm install
npm run dev
```
This will start up a server on localhost. In the browser open up a console. There you can access the combinatorics.js functions through
`combinatorics` object that's exposed. Try e.g. `combinatorics.combinations([1,2,3,4,5], 3)`, (or even better `Array.from(combinatorics.combinations([1,2,3,4,5], 3))` - this converts an iterator to an array).

# Docs
Computes all subsets of length n of a set (subset means unordered without repetition of elements)
```
combinations(set: Array(a), n: Nat): Iterator(Array(a))
numOfCombinations(m: Nat, n: Nat): Nat
```

Computes all tuples of length n of a set (tuple means ordered with repetition of elements allowed)
It's the cartesian product set x set x ... x set n-times
```
tuples(set: Array(a), n : Nat): Iterator(Array(a))
numOfTuples(m: Nat, n : Nat): Nat
```

Computes all permutations of length n of a set (permutation means ordered without repetition of elements)
```
permutations(set: Array(a), n: Nat): Iterator(Array(a))
numOfPermutations(m: Nat, n : Nat): Nat
```

Computes all multisubsets of length n of a set (multisubset means unordered with repetition of elements)
```
multisets(set: Array(a), n: Nat): Iterator(Array(a))
numOfMultisets(m: Nat, n : Nat): Nat
```

