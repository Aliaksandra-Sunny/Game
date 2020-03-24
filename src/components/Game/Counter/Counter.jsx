import React from "react";

 class Counter extends React.Component{
     render() {
         return(
             <div>
                 {this.props.counter}
             </div>
         )
     }
 }

 export default Counter;