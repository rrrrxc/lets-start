
function father() {
    this.name = 'rxc'
    this.age = 19
}

father.prototype.call = function () {//给father()的原型添加call方法
    console.log('hello')
}
const kd =new father()//father() new 出的新函数具有call方法
kd.call()

const lch ={}
lch.__proto__=father.prototype
lch.call()

function parent() {
    this.name = 'pjw';
    this.age = 23
}

parent.prototype.getMoney = function() {
    console.log('获取100元')
}

const child = new parent()
child.getMoney()

const simpleChild = {}


// 手动更改普通对象的__proto__指向
simpleChild.__proto__ = parent.prototype

simpleChild.getMoney()
console.log(simpleChild)

// golang
// 函数式 + 组合的方式

const annimal = {

}

function walk(annimal) {
    xxxxxx(annimal)
}