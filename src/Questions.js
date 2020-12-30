import React, {useState, useEffect} from 'react';
import './Questions.css';

const url = "http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/Rajat"

const Questions = () => {

    const [exam, setExam] = useState([]);
    const [value, setValue] = useState(0);
  
    const fetchExam = async () => {
      const response = await fetch(url);
      const newExam = await response.json();
      setExam(newExam);
    }
  
    useEffect(() => {
      fetchExam();
    }, []);
  
  console.log(exam);
  
  const {examDurationInMinutes, examTitle} = exam.exam;
  
  // console.log(`Section${value+1}`);
  
  const {quesText, option1, option2, option3, option4} = exam.exam.sections[0].Section1[value];

    const checkNumber = (number) => {
        if(number > exam.exam.sections[0].Section1.length -1 ) {
            return 0
        }

        if(number < 0) {
            return exam.exam.sections[0].Section1.length -1;
        }

        return number;
    };

  const nextQue = () => {
      setValue((value) => {
          let newValue = value + 1;
          return checkNumber(newValue);
      })
  }
  
    return (
        <>
            <div className="flexbar">
                <p>Design Facility-{examTitle}</p>
                <p>Exam Time:{examDurationInMinutes}</p>
            </div>
            <nav>
                <p>sections navbar</p>
            </nav>
            <div className="queNum">
                <p>Question Number</p>
            </div>
            <div className="queText">
                <p>{quesText}</p>
            </div>
            <div>
                <ol type="A">
                    <li className="optionsText"> {option1}</li>
                    <li className="optionsText"> {option2}</li>
                    <li className="optionsText"> {option3}</li>
                    <li className="optionsText"> {option4}</li>
                </ol>
            </div>
            <div className="flexbar">
                <button className="btn" onClick={nextQue}>
                    Mark for Review & Next
                </button>
                <button className="btn">
                    Clear Response 
                </button>
                <button className="save-btn" onClick={nextQue}>
                    Save & Next
                </button>
            </div>
        </>
    )
}

export default Questions
