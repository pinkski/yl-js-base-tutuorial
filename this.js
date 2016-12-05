/**
 * Created by lynn on 2016/12/5.
 */

// 1. 代表全局window global(nodejs)
function test() {
    this.x = 1
    console.log(this.x)
}

test()


// 2. 作为对象方法调用，代表上级对象
function test2() {
    console.log(this.x)
}

var o = {}
o.x = 1
o.m = test2
o.m()

// 3.作为构造函数调用，代表这个新对象
function test3() {
    this.x = 1
}
var o = new test3()
console.log(o.x)

//4.apply调用，代表第一个参数，apply为空时默认调用全局对象
var x = 0
function test4() {
    console.log(this.x)
}
var o = {}
o.x = 1
o.m = test4
o.m.apply()



