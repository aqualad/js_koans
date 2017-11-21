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
});
