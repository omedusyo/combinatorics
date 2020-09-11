
# Description
Library for enumerating elementary combinatorial structures (subsets, multisubsets, permutations, tuples).

# Installation
Install dependencies ([parcel](https://parceljs.org/))
```
npm install
npm run dev
```
This will start up a server on localhost. In the browser open up a console. You can access the combinatorics.js functions through
```
combinatorics
```
objects that's exposed. Try e.g.
```
combinatorics.range(0, 10)
```

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

