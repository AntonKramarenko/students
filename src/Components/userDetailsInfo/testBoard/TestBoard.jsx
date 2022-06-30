import { TestHeader } from '../testHeader/TestHeader'
import { TestItem } from '../testItem/TestItem'
import './TestBoard.scss'

export const TestBoard = (tests) => {

  return (
    <div className='testBoard'>
        <ul className="testBoard__results testBoard__results-score"> 
            <li className="testBoard__results-title">score</li>
            <li className="testBoard__results-item"><div></div>90%+ accuracy</li>
            <li className="testBoard__results-item"><div></div>80 - 89% accuracy</li>
            <li className="testBoard__results-item"><div></div>80 - 89% accuracy</li>
            <li className="testBoard__results-item"><div></div>80 - 89% accuracy</li>
        </ul>
        <div className="testBoard__results testBoard__results-speed">
            <li className="testBoard__results-title">Speed</li>
            <li className="testBoard__results-item"><div></div>above expected</li>
            <li className="testBoard__results-item"><div></div>above expected</li>
            <li className="testBoard__results-item"><div></div>below expected</li>
        </div>

        <table className="testBoard__board">
            <tbody>
              <TestHeader/>
              {tests.tests.map((test,index) =>  <TestItem key={test.label} test={test} index={index}/>)}
            </tbody>
        </table>

    </div>
  )
}
