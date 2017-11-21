global.expect = require('chai').expect;
global.identity = x=>x;
global.is = (x,y) => expect(x).to.equal(y);
global.It = (text, ...args) => it(`it ${text}`, ...args);
global.isTrue = (x) => is(x, true);
global.isFalse = (x) => is(x, false);
// const glob = require('glob');
// const chokidar = require('chokidar');
// const
//     runTest = file => {
//             try {
//                 delete require.cache[require.resolve(file)];
//                 console.log(`Requiring file>>>${  file}`);
//                 require(file);
//             } catch (err) {
//                 console.log(`Oh lookee an error: ${err}`);
//                 console.log(err);
//                 throw err;
//             }
//         },
//     folder = f => `${process.cwd()}/test${  f  }{.js,/*.js}`,
//     globAll = name => (
//         console.log(folder(name)),
//         console.log(glob.sync(folder(name))),
//         glob.sync(folder(name))
//     ),
//
//     {pipe, chain, map} = require('ramda'),
//     requireAll = pipe(chain(globAll), map(runTest));
// let watcher = chokidar.watch(folder('/**'));
// watcher.on('change', (...args) => {
//     console.log(args);
//     requireAll([
//         '/oop'
//     ]);
// });
// requireAll([
//     '/oop'
// ]);
