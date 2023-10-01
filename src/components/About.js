import React from 'react'

export default function About(props) {
  let mystyle = {
    color:props.mode==='light'?'dark':'light',
    backgroundColor:props.mode==='dark'?'light':'dark'
  }
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" style={mystyle}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Want to know Me ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body my-3">
              <strong>TextUtils</strong> is a user-friendly web application created using React, designed to assist users in analyzing and manipulating text. Whether you're a writer, student, or professional, TextUtils provides valuable assistance in understanding and dissecting textual content. The application features an intuitive and user-friendly interface, making it accessible to users of all levels of expertise. Its clean design ensures that users can effortlessly navigate and utilize its features.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils</strong> enables users to manipulate text easily. It offers functions for formatting, converting, and transforming text to meet various requirements. Users can change letter cases, remove whitespace, and more with just a few clicks.  For content creators and writers, TextUtils provides a character and word count feature. This assists in meeting specific word limits or character constraints for documents, articles, or assignments. Introducing the groundbreaking Speak feature in our textUtils application! We understand the importance of accessibility and convenience in today's fast-paced digital world. With the Speak feature, your written words come to life, making it easier than ever for users to interact with text content. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Free to use
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. It reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter tool software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. is a free character counter tool that provides instant character count and word count statistics for a given text. It reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
