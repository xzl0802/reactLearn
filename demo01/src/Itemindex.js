/*
 * @Author: xzl 
 * @Date: 2019-09-05 09:54:13 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-09-09 16:19:41
 */

 //????????
 import React, { Component,Fragment } from 'react';
 import PropTypes from 'prop-types'

 //????????



 class Itemindex extends Component {

    constructor(props){
      super(props)
      // this.handleDelte =this,this.handleDelte.bind(this);  ???????this???
    }
    //????????dom?  ???????
    //??????DOM?  ???????
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps=============???")
    }
    //?????????  
    componentWillUnmount(){
 console.log('componentWillUnmount-------------???')
    }
     //state = {  }
     render() { 
         return (
               <Fragment>
                 {/* ??????? */}
             <li onClick={this.handleDelte.bind(this)}>{this.props.name}-{this.props.content}</li>  
             
             </Fragment>
           );
     }
    // ????????? 
     handleDelte(){
       //?????????
       this.props.deleteItem(this.props.index);  

     }
 }
  
 //????
 Itemindex.propTypes={
   content:PropTypes.string, 
   index:  PropTypes.number,
   deleteItem:PropTypes.func
 }
 Itemindex.defaultProps={
     name:'1'
 }
 export default Itemindex;