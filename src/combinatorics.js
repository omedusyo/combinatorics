

// example.
//  > range(3, 8)
// ~> [3,4,5,6,7]
function range(a, b) {
  let xs = [];
  for (let i = a; i < b; i++) {
    xs.push(i);
  }
  return xs;
}

function head(xs) {
  return xs[0];
}

function tail(xs) {
  return xs.slice(1);
}


