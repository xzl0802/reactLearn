/*
 * @Author: xzl 
 * @Date: 2019-09-11 14:30:15 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-11 14:41:38
 */

 import React, { Component } from 'react';
 class Boss extends Component {
     
     constructor(props){
         super(props)
         this.state = { 
             isShow:true
          }
          this.toToggole= this.toToggole.bind(this);
     }
     render() { 
         return (
            <div>
                <div className={this.state.isShow?'show':'hide'}>Boos</div>
                <div><button onClick={this.toToggole}>test</button></div>
            </div>

           );
     }
     toToggole(){
         this.setState({
             isShow:this.state.isShow?false:true
         })
     }
 }
  
 export default Boss;