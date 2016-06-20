import mocha from 'mocha';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import should from 'should';

import R from 'ramda';

let expect = chai.expect;

chai.use(chaiImmutable);

export {R, mocha, chai, should};
