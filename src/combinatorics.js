
// example.
//  > range(3, 8)
// ~> [3,4,5,6,7]
export function range(a, b) {
  let xs = [];
  for (let i = a; i < b; i++) {
    xs.push(i);
  }
  return xs;
}

export function head(xs) {
  return xs[0];
}

export function tail(xs) {
  return xs.slice(1);
}


