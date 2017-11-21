describe('ES6 Functions', () => {
    describe('Arrow Functions', () => {
        describe('There are 2 magic keywords available in functions defined with the `function` keyword', () => {
            It('can return an object holding these magic words', () => {
                function dynamicContext() {
                    return {
                        arguments: Array.from(arguments),
                        // NOTE:
                        // 'arguments' is not instanceof Array,
                        // it is a really weird object that quacks like arrays in property access, but not methods :(
                        this: this
                    };
                }
                const that = {
                    x:1,
                    y:2
                };
                const result = dynamicContext.call(that, 1,2,3);
                isEqual(___, result.arguments);
                isEqual(___, result.this);
            });
        });

        describe('Syntax', () => {

            It('is awesome, and has arrows', () => {
                const fun = (x,y) => {
                    return x + y;
                };
                is(___, fun(1,2));
            });

            It('has optional parens when one argument (no destructuring/no spread/no defaults)', () => {
                const id = x => x;
                is(___, id(true));
                const pair = (x,y) => [x,y];
                is(___, pair(1,2));
            });

            It('has optional function body/curly braces for returning single EXPRESSIONS', () => {
                const ok = x => x + 1;
                const ok2 = (x) => (x + 1);
                const LISPishlyOkay = (x => x + 1);
                const okButNoisy = x => {return x + 1;};
                const notOkayAndNoisy = x => {x + 1;};
                is(___, ok(0));
                is(___, ok2(0));
                is(___, LISPishlyOkay(0));
                is(___, okButNoisy(0));
                is(___, notOkayAndNoisy(0));
            });

            It('DOES NOT HAVE DYNAMIC CONTEXT', () => {
                const noMagic = () => {
                    return {
                        arguments: Array.from(arguments),
                        this: this
                    };
                };
                const that = {x:1};
                const result = noMagic.call(that, 1,2,3);
                isNot([1,2,3], result.arguments);
                isNot(that, result.this);
                // In fact, I don't know what `that` would be.
            });

            It('is bound to lexical `this` where it is defined!', () => {
                function example() {
                    return () => this;
                }
                const that = {x:1};
                const preBound = example.call(that);
                is(___, preBound());
            });

            It('is just syntax sugar!!! (For Function.prototype.bind)', () => {
                const noMagic = function thisGotReallyOldInPreES6() {
                    return this;
                }.bind(this);
                const alsoNoMagic = () => {return this;};
                is(noMagic(), alsoNoMagic());
            });

            It('has syntax edge cases', () => {
                /* eslint-disable no-unused-labels */
                const iJustWantToReturnAnObjectLiteral = (a) => {a:a;};
                is(___, iJustWantToReturnAnObjectLiteral(1));
                const trustTheParens = (a) => ({ a: a });
                is(___, trustTheParens(1));
            });

            It(`
comes from CoffeeScript(CS), where they are referred to as 'fat' arrows.
There are also 'skinny' arrows in CS, but in es6 we just call them arrow functions and arrows`, () => {
                    const add = x => y => x + y;
                    is(___, add(1)(2));
                    const add10 = add(10);
                    is(___, add10(1));
                });
        });
    });
});
