/*
 * @Author: xzl 
 * @Date: 2019-09-05 09:54:13 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-05 13:56:54
 */

 //????????
 import React, { Component,Fragment } from 'react';

 class Itemindex extends Component {

    constructor(props){
      super(props)
      // this.handleDelte =this,this.handleDelte.bind(this);  ???????this???
    }
     //state = {  }
     render() { 
         return (
               <Fragment>
                 {/* ??????? */}
             <li onClick={this.handleDelte.bind(this)}>{this.props.content}</li>  
             
             </Fragment>
           );
     }
    // ????????? 
     handleDelte(){
       //?????????
       this.props.deleteItem(this.props.index);  

     }
 }
  
 export default Itemindex;