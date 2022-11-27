// 闭包(一个作用域中引用了另外一个作用域的值或者变量)
// scope
// 全局作用域
// 函数作用域
// 块作用域
const sentence = '哈哈哈'

function test(msg) {
    console.log(msg)
}





test(sentence)

test('2222')

function closure() {
    console.log(sentence)
}

closure()






const fn = []
var i;
for(i = 0; i < 5; i++) {
    const j = (function(num) {
        function main() {
            console.log(num);
        }
        return main;
    })(i)
    fn.push(j)
}
console.log(fn)

const fn1 = []
for(i = 0; i < 5; i++) {
    const j = function() {
        console.log(i)
    }
    
    fn1.push(j)
  fn1[i]()
}

fn[0]()
fn1[4]()

// (function test(msg) {console.log(msg)})('iife')