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

        It(`inherits properties from its constructor's prototype`, () => {
            is(___, myObject.constructor);
            is(___, myObject.hasOwnProperty === myObject.constructor.prototype.hasOwnProperty);
        });

        It(`does not own inherited properties`, () => {
            is(___, myObject.hasOwnProperty('hasOwnProperty'));
        });

        It(`can shadow prototype properties`, () => {
            myObject.hasOwnProperty = Identity;
            is(15, myObject.hasOwnProperty(15));
            is(___, myObject.hasOwnProperty === Object.prototype.hasOwnProperty);
        });

        It('can still use the prototype property after shadowing',() => {
            myObject.hasOwnProperty = Identity;
            is(___, myObject.constructor);
            is(___, myObject.constructor.prototype.hasOwnProperty.call(myObject, 'hasOwnProperty'));
        });
    });

    describe('For Literals', () => {
        It('exists on array, object, function literals', () => {
            is(___, {}          .constructor.prototype);
            is(___, []          .constructor.prototype);
            is(___, function(){}.constructor.prototype);
            is(___, (() => {})  .constructor.prototype);
        });

        It('is possible to create an object with zero properties and no prototype', () => {
            let trueHashMap = Object.create(null);
            is(___, trueHashMap instanceof Object);
            is(___, trueHashMap.hasOwnProperty);
        });
    });

    describe('Are just object references', () => {
        let A, B;

        let reset = () => (
            A = { a: 1 },
            B = { b: 2 }
        );
        beforeEach(reset);

        It('is possible to create a new object that inherits arbitrarily from another', () => {
            let C = Object.create(A);
            is(___, C.a);
            C.a = 3;
            is(___, A.a);
            is(___, Object.getPrototypeOf(C));
            is(___, C.constructor);
            is(___, C instanceof A);
        });

        It('is possible to emulate (static) multiple inheritance (mixins)', () => {
            let C = Object.create(Object.assign({}, A, B));
            is(___, Object.getPrototypeOf(C));
            is(___, C.a);
            is(___, C.b);
        });

        It('is possible to dynamically update the prototype', () => {
            let C = Object.create(A);
            is(___, C.c);
            A.c = 3;
            is(___, C.c);
        });

        It('is possible to dynamically and destructively update the prototype', () => {
            let C = Object.create(A);
            let D = Object.create(A);
            C.constructor.prototype.a = 3;
            is(___, A.a);
            is(___, D.a);
        });
    });

    describe('Acts as linked list', () => {
        It('traverses the chain of prototypes to find the value of a prop', () => {
            let A = {a:1},
                B = {b:2},
                C = {c:3};
            Object.setPrototypeOf(B, A);
            Object.setPrototypeOf(C, B);
            is(___, C.a);
            is(___, C.b);
            is(___, C.c);
        });
    });

    describe('Gotchas', () => {
        it('will iterate inherited properties', () => {
            let keys = [];
            let A = {a:1};
            let B = {b:2};
            Object.setPrototypeOf(B, A);
            let C = Object.create(B);
            C.c = 3;
            for(let key in C) {
                keys.push(key);
            }
            isEqual(keys, Object.keys(C));
        });
    });
});
