/**
 * Created by lynn on 2016/11/28.
 */

//this 关键字
// 函数中的this代表一个对象，具体哪个对象要取决于函数的调用方式

// 调用方式1： 直接调用
function setName() {
    this.name = name
}
setName('yolynn')
//这里this代表一个全局对象，这个对象是代码的宿主环境提供的，比如在浏览器中是window对象，在node.js中是global对象，如果宿主环境中没有提供这个全局对象
//那么调用函数setName将会报错

// 2: new 调用
new setName('yolynn')
// new 调用时，解释器会创建一个新的对象，this就指向这个新的对象，函数最后也会返回这个新的对象

// 3: 引用调用
var person = {}
person.setName = setName
person.setName('yolynn')
// 引用调用函数时，this指向引用所属的对象

// 4: call和apply调用
setName.call(person, 'yolynn')
// call的第一个参数就是this代表的对象，后面的参数代表传给函数的参数，上面的例子中，this指向person对象

// 5: bind调用
var binded = setName.bind(person)
binded('yolynn')
// this指向person