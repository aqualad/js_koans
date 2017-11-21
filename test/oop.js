describe('Prototypes:', () => {
    describe('As property inheritance mechanism', () => {
        let myObject;
        let reset = () => myObject = {
            a: 1,
            b: 2
        };

        beforeEach(reset);

        It('is possible to access a property you did not declare in the initializer', () => {
            expect(myObject.hasOwnProperty).to.exist;
            is(___, myObject.hasOwnProperty instanceof Function);
        });

        It(`inherits properties from the global Objects Prototype`, () => {
            is(___, myObject.hasOwnProperty === Object.prototype.hasOwnProperty);
        });

        It(`does not own inherited properties`, () => {
            is(___, myObject.hasOwnProperty('hasOwnProperty'));
        });

        It(`can shadow prototype properties`, () => {
            myObject.hasOwnProperty = identity;
            is(15, myObject.hasOwnProperty(15));
            is(___, myObject.hasOwnProperty === Object.prototype.hasOwnProperty);
            is(___, Object.prototype.hasOwnProperty.call(myObject, 'hasOwnProperty'));
        });
    });
});
