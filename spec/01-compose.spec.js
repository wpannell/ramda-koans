import {R} from '../test-helper';
let {compose, pipe, reduce, filter, multiply, range, tap} = R;

describe('composition', () => {
  let f = x => x + 1;
  let g = x => x * 5;

  it('mathematical', () => {
    (f(g(1))).should.equal(6);
    (g(f(1))).should.equal(10);
  });

  it('f ∘ g or R.compose', () => {
    (compose(f, g)(1)).should.equal(6);
    (compose(g, f)(1)).should.equal(10);
  });

  it('R.pipe evaluates in the opposite order of compose', () => {
    (pipe(g, f)(1)).should.equal(6);
    (pipe(f, g)(1)).should.equal(10);
  });

  it('multiply even positive integers in range: 1 - 5', () => {
    const isEven = x => x % 2 === 0;
    const multiplicativeIdentity = 1;

    const multiplyEvens = compose(
        tap(console.log),
        reduce(multiply, multiplicativeIdentity), //monoid ...
        filter(isEven)
    );

    (multiplyEvens(range(1, 5))).should.equal(8);
  });
});
