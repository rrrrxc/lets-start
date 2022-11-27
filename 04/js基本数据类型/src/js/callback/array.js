/* const { Value } = require("sass");

const object={
    ur1 :'example',
    data :'123456',
    header :{
        'font-size':100
    },

    
    succese : (res)=> {
    console.log(res.number);
    }


}

wx.request(Object object) */


/* //遍历函数forEach
const a=[1,2,3,4]
function shuchu (a,b,c){
    console.log(a,b);

}
a.forEach(shuchu) */

/* //改变数组各个元素的值函数map()
const t=[1,2,3,4]//定义一个数组
t.map(a=>a+1)//每个元素加1
.forEach(a=>console.log(a))//打印新的数组
 */

/* //排序函数sort

//顺序
const a=[6,7,2,5];
a.sort((a,b)=>{
    if(a>=b)
    {
        return 1;
    }
    else
    {return -1;} 
})
//顺序简写
a.sort((a,b)=>a-b)

//逆序
const a=[6,7,2,5];
a.sort((a,b)=>{
    if(b>=a)
    {
        return 1;
    }
    else
    {return -1;} 
})
console.log(a)
//逆序简写
a.sort((a,b)=>b-a) */

console.log(array.includes(100))
console.log(array.join('+'))
// console.log(array.reverse())
console.log(array.slice(1, 3))

const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish.splice(2, 0, "drum");



const name = 'drum'
const findItem = myFish.findIndex((item) => item === name)

console.log(findItem)




const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((item) => item.length > 5)
console.log(result)


const testArr = [[6, 2], 3, 4, [4], 5]
// 打平，排序，过滤数值为4的元素，然后打印所有值
testArr.flat()
    .sort((a, b) => a - b)
    .filter((item) => item !== 4)
    .forEach((item) => console.log(item))
