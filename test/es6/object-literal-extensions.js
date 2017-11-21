describe('ES6 Object Syntax Enhancements', () => {
    describe('Function/Method property shorthands', () => {
        It('allows easier assignment of named functions in object intiailizers/literals', () => {
            const moreTyping = {
                toString: function toString() {
                    return 'Two times!';
                }
            };
            is(___, `${moreTyping}`);
            const lessTyping = {
                toString() {
                    return 'One time!';
                }
            };
            is(___, `${lessTyping}`);
        });
    });

    describe('Computed Properties', () => {
        It('allows you to inline dynamic keys', () => {
            const dynamicExpression = id => `I am dynamic ${  id}`;

            const moreTyping = {};
            moreTyping[dynamicExpression(0)] = 'a';
            is(___, moreTyping[dynamicExpression(0)] );

            // Now identifiers in object literals can be arbitrary expressions!
            const lessTyping = { [ dynamicExpression(0) ]: 'a' };
            is(___, lessTyping[dynamicExpression(0)] );
        });
    });

    describe('Property Definitions', () => {
        It('is the greatest thing since sliced bread', () => {

            let a = 1;
            let b = 2;
            let c = 3;
            let altogetherNow = {
                a,
                b,
                c
            };
            is(___, altogetherNow.a);
            is(___, altogetherNow.b);
            is(___, altogetherNow.c);

            const fun = (a,b,c) => ({
                a,
                b,
                c
            });
            const f = fun();
            is(___, f.a);
            is(___, f.b);
            is(___, f.c);
        });
    });
});
