/**
 * Created by lynn on 2016/11/23.
 */


//IIFE  立即执行函数表达式   括号、感叹号、加号、减号、等号
// (function test(a) {
//     console.log(a)
// })(1234)

// (function test(a) {
//     console.log(a)
// })(12)

// !function test(a) {
//     console.log(a)
// }(11)

// +function test(a) {
//     console.log(a)
// }(22)

// -function test(a) {
//     console.log(a)
// }(33)

// var s = function test(a) {
//     console.log(a)
// }(44)、


// ES5中使用IIFE声明私有变量
// (function () {
//     var private = 3
// })()
// console.log(private)

// //ES6不需要IIFE
// {
//     let private2 = 1;
// }
// console.log(private2);

// const x = 1
// x = 2

// const first = 'zhu'
// const second = 'yolynn'
// console.log('your name is ${first} ${second}')

// const array = [1, 2, 3, 4]
// const [first, ,third] = array
// console.log(first, third)

//交换值
// let a = 1
// let b = 2
// [a, b] = [b, a];
// console.log(a, b)

// //ES5 OOP
// var Animal = (function () {
//     function MyConstructor(name) {
//         this.name = name
//     }
//     MyConstructor.prototype.speak = function speak() {
//         console.log(this.name + ' makes a noise')
//     }
//     return MyConstructor;
// })();
// var animal = new Animal('animal')
// animal.speak()
//
// //ES6 OOP
// class Dog {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(this.name + ' makes a sound')
//     }
// }
// const dog = new Dog('dog')
// dog.speak()
//
// //ES5 继承
// var Lion = (function () {
//     function MyConstructor(name) {
//         Animal.call(this, name)    // 明确的用参数调用Animal的构造器
//     }
//
//     MyConstructor.prototype = Object.create(Animal.prototype)  // Animal原型赋值给Lion原型
//     MyConstructor.prototype.constructor = Animal
//     MyConstructor.prototype.speak = function speak() {
//         Animal.prototype.speak.call(this)      //调用父类的speak方法
//         console.log(this.name + ' roars')
//     }
//     return MyConstructor
// })()
// var lion = new Lion('lion')
// lion.speak()
//
// //ES6 继承
// class RuralDog extends Dog {
//     speak () {
//         super.speak();
//         console.log(this.name + ' barks')
//     }
// }
// var ruralDog = new RuralDog('ruralDog')
// ruralDog.speak()

//ES5回调  如果再执行多次代码就一团糟了
// function printAfterTimeOut(string, timeout, done) {
//     setTimeout(function () {
//         done(string)
//     }, timeout)
// }
// printAfterTimeOut('Hello', 2e3, function(result) {
//     console.log(result)
//
//     printAfterTimeOut(result + ' Reader', 2e3, function(result) {
//         console.log(result)
//     })
// })

//ES6 Promise中可以用then在某个函数完成后执行新的代码，而不必再嵌套函数
// function printAfterTimeOut(string, timeout) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(string)
//         }, timeout)
//     })
// }
// printAfterTimeOut('Hello', 2e3).then((result) => {
//     console.log(result)
//     return printAfterTimeOut(result + ' Reader', 2e3)
// }).then((result) => {
//     console.log(result)
// })

//ES5 this的指向有问题: 需要用临时变量_this,或者使用bind绑定
// var _this = this
// $('.btn').click(function (event) {
//     _this.sendData()
// })
// $('.input').on('change', function (event) {
//     this.sendData()
// }).bind(this)
//
// //ES6使用箭头函数解决
// $('.btn').click((event) => this.sendData())
// const ids = [291, 288, 984]
// const messages = ids.map(value => 'ID is ${value}')

//ES5处理不定参数麻烦
// function printf(format) {
//     var params = [].slice.call(arguments, 1);
//     console.log('params:' + params)
//     console.log('format:' + format)
// }
// printf('%s %d %.2f', 'adrian', 321, Math.PI);

//ES6展开操作符
// function printf(format, ...parmas) {
//     console.log('params:', parmas)
//     console.log('format:', format)
// }
// printf('%s %d %.2f', 'adrian', 321, Math.PI);

//ES6 Promise
// var promise = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve(value)
//     } else  {
//         reject(error)
//     }
// })
// promise.then(function (value) {
//     //success
// }, function (value) {
//     //failure
// })

// new Promise(function (resolve, reject) {
//     throw new Error('悲剧了，又出bug了')
// }).catch(function (error) {
//     console.log(error)
// })

// Promise.reject(new Error('什么鬼'))

var a = 3
console.log(this.a)



