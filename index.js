global.expect = require('chai').expect;
global.Identity = x=>x;
global.is = (x,y) => expect(x).to.equal(y);
global.isEqual = (x,y) => expect(x).to.deep.equals(y);
global.It = (text, ...args) => it(`it ${text}`, ...args);
global.isTrue = (x) => is(x, true);
global.isFalse = (x) => is(x, false);
global.___ = undefined;
