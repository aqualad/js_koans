const A = 1;

// Named export syntax
export {      // Not a code block, an object, or a destructure expression,
    A as a,   // Allows a renaming expression, but dont do this, its just more indirection
    A
};

// Named export (no special syntax beyong 'export')
export function id(x) { return x; }
export class NamedClass {}
export const Hello = 'World';
export let x = 0;

export default () => 'Any expression you want, no need for a name';
