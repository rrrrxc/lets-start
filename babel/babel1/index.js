import base from './base.js'
console.log(base)
const a=1;
const b = () => console.log(2);
const c = {
    name: 'rxc',
    age: '19',
    info: {}
}

const {name, age: PeopleAge, info} = c;
// const test = c && c.info && c.info.name
const test = c?.info?.name?.age