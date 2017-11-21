const {isEqual} = require('lodash');
global.expect = require('chai').expect;
global.Identity = x=>x;
global.is = (x,y) => expect(isEqual(x,y)).to.be.true;
global.isNot = (x,y) => expect(isEqual(x,y)).to.be.false;
global.isEqual = is;
global.It = (text, ...args) => it(`it ${text}`, ...args);
global.isTrue = (x) => is(x, true);
global.isFalse = (x) => is(x, false);
global.___ = undefined;
global.throws = (error, deferred) => {
    try {
        deferred();
    } catch (err) {
        expect(err.constructor).to.equal(error);
    }
};
global.noThrows = (deferred) => expect(deferred).to.not.throw;
