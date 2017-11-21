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
            expect(unsafe).to.throw(TypeError);

            const safe = ([a,b,c] = []) => [a,b,c];
            expect(safe).to.not.throw(TypeError);
        });

        It('is just syntax sugar', () => {
            let x = array[0],
                ys = array.slice(1);
            let [a,...bs] = array;
            is(___, x);
            is(___, ys);
        });

        It('allows for defaults as well', () => {
            let [a, b, c, d, e = 'E'] = array;
            is(___, d);
            is(___, e);
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
        It('breaks on undefined or null', () => {
            const unsafe = ({x, y}) => x + y;
            expect(unsafe).to.throw(SyntaxError);
            const safeDefaults = ({x,y} = {}) => x + y;
            expect(safeDefaults).to.not.throw(___);
        });
    });
});
