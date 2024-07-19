import React, { useState } from 'react'
// import {Link,NavLink} from 'react-router-dom'

export default function About(props) {


    // const[myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'

    // })
    let myStyle ={
        color:props.mode==='dark'?'white':'#0f2740',
        backgroundColor:props.mode==='dark'?'#0f2740':'white',
        
    }
    
  return (
    
            <div className="container" style={myStyle}>
                <h1 className="my-4">About Us</h1>
                <div className="accordion" id="accordionExample"style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong> 
               
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Alphaplay gives you to analyze your text</strong> here we can preview our text and we can count the words and charecters and time duration of reading <code>.Alphaplay-body</code>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Alphaplay is free charecter counter tool .</strong>Which gives statestics about words and alphabets  <code>Alphaplay-body</code>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This website is available in every website </strong>Like Chrome,firefox,internet explorer<code>.Alphaplay-body</code>
            </div>
            </div>
        </div>
        </div>
        
        
    </div>
      
    
  )
}
