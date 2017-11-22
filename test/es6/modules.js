import theDefault from './modules/b';
import {NamedClass} from './modules/a';
import {NamedClass as proxiedNamedClass} from './modules/b';

describe('Module Syntax and Semantics', () => {
    describe('Imports', () => {
        It('is possible to import a default', () => {
            is(___, theDefault);
        });
        It('is possible to import `named` exports', () => {
            is(___, NamedClass instanceof Function);
        });
    });

    describe('Exports', () => {
        It(`is possible to export another module's exports`, () => {
            is(___, proxiedNamedClass === NamedClass);
        });
    });
});
