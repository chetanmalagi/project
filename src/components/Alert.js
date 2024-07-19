import React from 'react'

function Alert(props) {
    const capitalize= (word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);    {/* this code is for capitalizing the alert first*/ }
    }
  return (
       <div style={{height:'50px'}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{backgroundColor:'#ced4da'}} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}    {/*imported from bootstrap*/}
        
        
    </div>}
    </div>
  )
}

export default Alert
