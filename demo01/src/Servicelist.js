/*
 * @Author: xzl 
 * @Date: 2019-09-04 10:02:53 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-04 16:03:43
 */

 
 import React,{Component,Fragment} from 'react';
 import './index.css';

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
                        <label htmlFor='inputId'><label>
                        <input  id="inputId" className="inputName" value={this.state.inputVal}  onChange={this.inputChange.bind(this)}/>  
                         {/* //数据绑定         dangerouslySetInnerHTML  html 渲染 */}
                        <button  onClick={this.addList.bind(this)}>增加服务</button></div>
                    <ul>
                      {
                          this.state.list.map((item,index)=>{
                              return <li  onClick={this.deleteItem.bind(this,index)}  key={index+item}  dangerouslySetInnerHTML ={{__html:item}} ></li>
                          })
                      }
                    </ul>
                </Fragment>
          )
     }
     inputChange(e){  //定义函数
   
        this.setState({
            inputVal:e.target.value
        })
     }  
     //增加列表
     addList(){
      this.setState({
          list:[...this.state.list,this.state.inputVal],   //... es6扩展运算符
          inputVal:''
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

 