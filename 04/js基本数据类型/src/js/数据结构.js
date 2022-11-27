/* // 栈，队列，哈希表
const arr = [1, 2, 3, 4, 5]
const arr1 = [[1, 2, 3], 3, 4, 5]
const arr2 = ['1', '2', '3']
const arr3 = [{ name: 'pjw' }, { name: 'xty' }, { name: '哈哈哈' }]

// const stack = []
// stack.push(1)
// stack.push(2)
// const stackToEle = stack.pop()
// console.log(stack, stackToEle, stack.length)


const obj=[];
obj.unshift();
console.log(obj)
obj.push(2);
obj.unshift(1)
console.log(obj)
obj.pop()
console.log(obj)

//栈
const chi =  {
    capacity:[],
    size : function () {
        return this.capacity.length;
    },

    push: function (item) {
        this.capacity.push(item);
    },
    pop : function () {
        return this.capacity.pop();
    }
}
chi.push(1);
chi.push(2);
console.log(chi.capacity,chi.size());
chi.pop();
console.log(chi.capacity,chi.size())
 

//队列:左进右出
const he = {
    capacity :[],
    size : function (){
        return this.capacity.length;
    },
    
    add : function (item) {
        this.capacity.unshift(item);
    },

    remove : function () {
        return this.capacity.pop();
    }
}

he.add(1)
he.add(2)
he.add(3)
console.log(he.capacity,he.size())
console.log(he.remove())

//队列：右进左出
const la = {
    capacity :[],
    size : function () {
        return this.capacity.length;
    },
    add : function (item) {
        this.capacity.push(item);
    },
    remove : function () {
        return this.capacity.shift();
    }
}

la.add(1)
la.add(2)
console.log(la.capacity,la.size())
console.log(la.remove())
console.log(la.capacity)
 */

//哈希表!经常用  存放key-value对 
/* const hashMap = new Map (); 
hashMap.set('name','rxc') 
hashMap.set('color',{a : 'red'}) //key一样会被覆盖，可以用symbol作为key,解决冲突问题
onsole.log(hashMap.get('name'))  */



//数组 ，存放value，set中元素的值不会重复,可以用来作基础数据的去重
const set = new Set ([1,1,2,3,4]);
console.log(set)