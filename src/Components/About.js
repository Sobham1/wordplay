import React from 'react'

function About(props) {
  return (
    <div style={{color:props.mode==='dark'?'white':'black',fontFamily:'courier',fontSize:'20px'}}>
        <h1>About WordPlay✏️</h1>
        <p>
            WordPlay is a text manipulation app that allows users to analyze and transform text with various features like word count, character count, and more.
        </p>
        <h2>Features:</h2>
        <ul>
            <li>Convert text to uppercase or lowercase</li>
            <li>Clear text input</li>
            <li>Remove extra spaces</li>
            <li>Copy text to clipboard</li>
        </ul>
        <h2>Usage:</h2>
        <p>Enter your text in the input area and use the buttons to manipulate it.</p>
    </div>
  )
}

export default About