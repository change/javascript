require('lodash');
const _ = require('lodash');
const { get, merge } = require('lodash');

const x = {};
_.get('a.b', x);
_.merge({ a: 'b' }, x);
get('a.b', x);
