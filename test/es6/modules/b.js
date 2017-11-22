import {default as a} from './a';
import aDefault from './a';
import {A as myA} from './a';
import anotherDefault, {namedFn as fn} from './a';

console.log(a, aDefault, myA, anotherDefault, fn);

export {default as aDefault} from './a';
export * from './a';
export default 'abc';
