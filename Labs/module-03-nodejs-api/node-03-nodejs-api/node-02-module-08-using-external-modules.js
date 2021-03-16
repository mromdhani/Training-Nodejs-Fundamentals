// This requires npm install --save lodash
import _ from 'lodash';

let words = ['sky', 'wood', 'forest', 'falcon', 
             'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

let data = ['_falcon', '-owl-', '_-sky-_'];
let trimmed = _.map(data, (word) => { return _.trim(word, '-_')});

console.log(trimmed);