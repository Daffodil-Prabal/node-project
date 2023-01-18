// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code(only share minimum)

const name = require('./4-names')
const say = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
say.sayHi(data.items)
say.sayHi(data.singlePerson.name)
say.sayHi('Trouble');
say.sayHi(name.john);
say.sayHi(name.peter);