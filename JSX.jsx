var Nav;
    // 输入jsx
var app = <Nav color='blue' />
    // 输出js
var app = React.createElement(Nav, {color: 'blue'})

var Nav, Profile
//输入JSX
var app = <Nav color="blue"><Profile></Profile></Nav>
//输出js
var app = React.createElement(Nav, {color: 'blue'}, React.createElement(Profile, null))

//展开属性
var component = <Component foo={x} bar={y}>

//组件属性
<Comment title="kima" content="kima" />
var title = this.props.title

getInitialState: function() {
    return {state : false}
}

this.setState({state: true})

// 原理分析：当用户点击组件，导致状态变化，this.setState方法就是修改状态值，每次修改之后，自动调用this.render方法，再次渲染组件

// 组件的生命周期： 1，Mounting 已插入真是DOM  2，Updating 正在被重新渲染  3，Unmounting 已移出真是DOM




