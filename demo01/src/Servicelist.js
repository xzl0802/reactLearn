/*
 * @Author: xzl 
 * @Date: 2019-09-04 10:02:53 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-09 15:36:02
 */

 
 import React,{Component,Fragment} from 'react';
 import './index.css';
 import  Itemindex from './Itemindex';
 class Servicelist  extends  Component{
    constructor(props){  //数据初始化
        super(props)
        this.state={
            inputVal:'',
            list:['测试1','册12']
        }
    }

     render(){
          return(
                <Fragment>
                    <div>
                        <label htmlFor='inputId'></label>
                        <input  id="inputId" className="inputName" value={this.state.inputVal}  
                         ref ={(input)=>{this.input =input}}
                        onChange={this.inputChange.bind(this)}/>  
                         {/* //数据绑定         dangerouslySetInnerHTML  html 渲染 */}
                        <button  onClick={this.addList.bind(this)}>增加服务</button></div>
                    <ul ref ={(ul)=>{this.ul =ul}}>
                      {
                          this.state.list.map((item,index)=>{
                           
                              {/*<li  onClick={this.deleteItem.bind(this,index)}  key={index+item}  dangerouslySetInnerHTML ={{__html:item}} ></li>*/  }
                              return (
                          <div       key={index+item}>
                              {/* 父子组件传值 */}
                              <  Itemindex 
                              content={item}
                              index ={index}
                             deleteItem={this.deleteItem.bind(this)}   
                               />
                          </div>
                          )
                            })
                      }
                    </ul>
                </Fragment>
          )
     }
    //  inputChange(e){  //定义函数
   
    //     this.setState({
    //         inputVal:e.target.value
    //     })
        
    //  }  
     inputChange(){  //定义函数
   
        this.setState({
            inputVal:this.input.value    //ref 使用赋值 
        })
        
     } 
     //增加列表
     addList(){
      this.setState({   //异步处理进程  详细学习虚拟DOM
          list:[...this.state.list,this.state.inputVal],   //... es6扩展运算符  
          inputVal:''
      },()=>{
//打印数量
console.log(this.ul.querySelectorAll('li').length);
      }) 
       
     }
     //删除
     deleteItem(index){  
         let list = this.state.list;
         list.splice(index,1);  //数组删除元素
         this.setState({
             list:list
         })
     }
 }
 export default Servicelist;

//  //一、为什么使用prop-types
// 在多人开发时，当被人使用自己定义的组件时，有可能出现类型传错的情况，而在自己的组件上加上prop-types，他可以对父组件传来的props进行检查，加入父组件中想传递的是字符串类型‘3’，而传递了一个数字类型3，如果没有类型检查系统不会给与提示，但是有了类型检查以后，再控制台会给你一个类型传递错误的提示。这样在工作中可以快速找到错误。

// 二、学习文档
// https://www.npmjs.com/package/prop-types npm官网
// https://reactjs.org/docs/typechecking-with-proptypes.html react官方

// 三、安装与引入
// //安装
// npm install prop-types --save
// //引入
// import PropTypes from 'prop-types';
// 四、它可以检测的类型
// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

// 五、class定义中使用方法
// class Greeting extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }

// // Specifies the default values for props:
// Greeting.defaultProps = {
//   name: 'Stranger'
// };

// // Renders "Hello, Stranger":
// ReactDOM.render(
//   <Greeting />,
//   document.getElementById('example')
// );
// 六、ES7中使用方法示例
// class Greeting extends React.Component {
//   //如果没有传递该属性时的默认值
//   static defaultProps = {
//     name: 'stranger'
//   }
//   //如果传递该属性，该属性值必须为字符串
//   static propTypes={
//     name:PropTypes.string
//   }
//   render() {
//     return (
//       <div>Hello, {this.props.name}</div>
//     )
//   }
// }
// 七、使用isRequired设置属性为必须传递的值
//  static propTypes={
//     name:PropTypes.string.isRequired
//   }
// 八、arrOf和objectOf多重嵌套类型检测
//   // An array of a certain type
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
 
//   // An object with property values of a certain type
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//   //示例
//   static propTypes = {
//         todoList:PropTypes.arrayOf(PropTypes.shape({
//             id:PropTypes.string.isRequired,
//             text:PropTypes.string
//         }))
//     }
// 九、shape检测不同对象的不同属性的不同数据类型
//   // An object taking on a particular shape
//   optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired
//   }),
//   //示例
//   static propTypes = {
//      object:PropTypes.shape({
//          name:PropTypes.string,
//          age:PropTypes.number
//       })
//  }
