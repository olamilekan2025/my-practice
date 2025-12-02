import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import './Faq.css'



const Faqs = [
    {
        question : "Where are you located",
        answer : "No 25 gbadegesin ayekale ota Efun osogbo osun state",

    },

    {
        question : "how old are you ",
        answer : "im 18 years old",
    },

    {
        question : "what is your favourite color",
        answer : "white"
    }
]

function Faq() {

    const [activeIndex, setActiveIndex] = useState (null)


    const toggleFAQ = (index) => {
        setActiveIndex ((prevIndex) =>(prevIndex === index ? null : index));
    }
    return (
         <div className="faq-container">
       <h2>Frequently Asked Questions</h2>
      {Faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{activeIndex === index ? <GrFormSubtract /> : <GoPlus />}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    )
}

export default Faq



