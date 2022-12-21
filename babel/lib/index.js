var _c$info, _c$info$name;
import "core-js/modules/es.function.name.js";
import base from './base.js';
console.log(base);
var a = 1;
var b = function b() {
  return console.log(2);
};
var c = {
  name: 'rxc',
  age: '19',
  info: {}
};
var name = c.name,
  PeopleAge = c.age,
  info = c.info;
// const test = c && c.info && c.info.name
var test = c === null || c === void 0 ? void 0 : (_c$info = c.info) === null || _c$info === void 0 ? void 0 : (_c$info$name = _c$info.name) === null || _c$info$name === void 0 ? void 0 : _c$info$name.age;