describe('Rest and Spread Syntax', ()=> {
    describe('Rest parameters', () => {
        It('allows for variadic arguments', () => {
            const rest = (x,y,...zs) => x + y + zs.length;
            is(___, rest(1,2,0,0,0));
            is(___, rest(1,2,[0,0,0]));
        });
        It('always puts rest into an array', () => {
            const returnsRest = (a,...bs) => bs;
            is(___, returnsRest().constructor);
        });
    });

    describe('Spread operator (`...someIterable`)', () => {
        It('allows alternate ways to concatenate arrays', () => {
            let A = [0,1,2];
            let Z = [9,8,7];
            isEqual(___, [...A]);
            isEqual(___, [...Z, ...A]);
        });
        It('calls the objects [Symbol.iterator] method to unpack into an array', () => {
            let A = new Set();
            [1,2,3].forEach(x=>A.add(x));
            let B = [4,5,6];
            isEqual(___, [...A, ...B]);
        });
    });

    It('is useful for patching/intercepting/decorating methods', () => {
        const ensureNumberArguments = fn => (...args) =>
            fn(
                ...args.map(
                    x=>parseInt(x,10)
                )
            );
        const add = ensureNumberArguments((x,y) => x + y);
        is(___, add('10a', '20b'));
    });
});
