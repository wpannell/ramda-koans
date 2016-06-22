import {R} from '../test-helper';
let {compose, pipe, reduce, filter, multiply, range, identity} = R;

describe('composition', () => {
  let f = x => identity;
  let g = x => identity;

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
});
