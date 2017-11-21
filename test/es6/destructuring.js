/* eslint-disable no-unused-vars */
describe('Destructuring', () => {
    describe('Arrays', () => {
        let array = ['a', 'b', 'c'];
        It('allows declaration assignment', () => {
            let [a,b,c, d] = array;
            is(___, a);
            is(___, b);
            is(___, c);
            is(___, d);
        });

        It('allows parameter assignment', () => {
            const firstEqual = ([a], [b]) => a === b;
            is(___, firstEqual([0, 1], ['0', '1']));
        });

        It('allows rest assignment', () => {
            let [a, ...bs] = array;
            isEqual(___, bs);
        });

        It('breaks on undefined or null', () => {
            const unsafe = ([a,b,c]) =>  [a,b,c];
            throws(___, unsafe);

            const safe = ([a,b,c] = []) => [a,b,c];
            noThrows(safe);
        });

        It('allows for defaults as well', () => {
            let [a, b, c, d, e = 'E'] = array;
            is(___, d);
            is(___, e);
        });

        It('is just syntax sugar', () => {
            let [a,...bs] = array;
            let
                x = array[0],
                ys = array.slice(1);

            let [i,j = 'j'] = ['a'];
            let
                m = ['a'][0],
                n = ['a'][1] || 'j';
            is(___, x);
            is(___, ys);
        });

        It('allows re-assignment and swapping', () => {
            let [a,b] = array;
            [b,a] = [a,b];
            is(___, a);
            is(___, b);
        });

    });
    describe('Objects', () => {
        It('allows declaration assignment', () => {
            const {x, y, z} = {
                x: 1,
                y: 2
            };
            is(___, x);
            is(___, y);
            is(___, z);
        });

        It('allows parameter assignment and reassignment', () => {
            let fun = ({x,y,z}) => (x + y + z);
            is(___, fun({
                x:1,
                y:2,
                z:3
            }));
        });

        It('allows nesting desconstruction', () => {
            let {
                a : { x, y },
                b : { z }
            } = {
                    a: {
                        x: 1,
                        y: 2
                    },
                    b: { z: 3 }
                };

            is(___, x + y + z);
        });

        It('allows defaults in the case of undefined', () => {
            const unsafeShallow = ({x, y}) => x + y;
            throws(___, unsafeShallow);
            const safeShallow = ({x,y} = {}) => x + y;
            noThrows(safeShallow);
            const unsafeNested = ({A: {x, y}} = {}) => x + y;
            throws(___, unsafeNested);
            const safeNested = (
                {
                    A: {
                        x = 1, // Default for x when not present on input
                        y = 2  // Same
                    } = {} // Default for pulling 'x' & 'y'
                } = {} // Default for pulling 'A'
            ) => x + y;
            noThrows(safeNested);
            is(___, safeNested());
            is(___, safeNested({ A: {x: 2} }));

            // The billion dollar mistake
            throws(___, safeNested(null));
        });

        It('allows accessing computed properties and renaming them to an identifier (variable)', () => {
            let x = { 'weird object eh?': 100 };
            let { 'weird object eh?': alias } = x;
            is(___, alias);
            let y = [1,2,3];
            let { [Symbol.iterator]: yIterator } = y;
            is(___, [...yIterator()]);
        });
    });
});
