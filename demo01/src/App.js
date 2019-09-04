/*
 * @Author: xzl 
 * @Date: 2019-09-03 14:47:08 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-04 10:08:09
 */

 import React,{Component} from 'react';  //es6 结构赋值
 //const  Component  = React.Component;
 class App extends  Component{  //继承
        render(){
            return(
                <div>Hello  word
                <ul className="list-name">
                    <li>{true?'ces':'12'}</li>
                    <li>1</li>
                </ul></div>
            )
        }

 } 
 export default App;