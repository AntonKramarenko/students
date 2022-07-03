import { TestHeader } from '../testHeader/TestHeader'
import { AssessmentItem } from '../assessmentItem/AssessmentItem'
import './AssessmentBoard.scss'

export const AssessmentBoard = (tests) => {
  return (
    <div className='assessmentBoard'>
        <ul className="assessmentBoard__results assessmentBoard__results-score"> 
            <li className="assessmentBoard__results-title">score</li>
            <li className="assessmentBoard__results-item"><div></div>90%+ accuracy</li>
            <li className="assessmentBoard__results-item"><div></div>80 - 89% accuracy</li>
            <li className="assessmentBoard__results-item"><div></div>80 - 89% accuracy</li>
            <li className="assessmentBoard__results-item"><div></div>80 - 89% accuracy</li>
        </ul>
        <div className="assessmentBoard__results assessmentBoard__results-speed">
            <li className="assessmentBoard__results-title">Speed</li>
            <li className="assessmentBoard__results-item"><div></div>above expected</li>
            <li className="assessmentBoard__results-item"><div></div>above expected</li>
            <li className="assessmentBoard__results-item"><div></div>below expected</li>
        </div>
        <table className="assessmentBoard__board">
            <tbody>
              <TestHeader/>
              {tests.tests.map((test,index) =>  <AssessmentItem key={test.label} test={test} index={index}/>)}
            </tbody>
        </table>
    </div>
  )
}