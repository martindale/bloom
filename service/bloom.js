// Bloom.
// Let's start by setting some configuration.
var config = require('./config');

// Acquire an instance of Maki.
var Maki = require('maki');
var bloom = new Maki(config);

// Define our "types".
// In Fabric, these are versioned definitions, content-addressable and usually
// only modifiable by the application developers.
bloom.define('Lesson', require('./resources/lesson'));
bloom.define('Event', require('./resources/event'));
bloom.define('Atom', require('./resources/atom'));

// Start our engine.
bloom.start();
