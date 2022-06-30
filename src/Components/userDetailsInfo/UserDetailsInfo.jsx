import { addColorScore, addColorSpeed } from '../userItem/addColorsValue';
import { TestBoard } from './testBoard/TestBoard'
import './UserDetailsInfo.scss'

export const UserDetailsInfo = ({name, id, tests,score, speed}) => {

  console.log(score);

  return (
    <div className='userDetailsInfo'>
            <div className="userDetailsInfo__person">
                <div className="userDetailsInfo__name">
                    Student:<b>{name}</b>
                </div>
                <div className="userDetailsInfo__id">
                    ID:<b>{id}</b>
                </div>
            </div>  
            <div className="userDetailsInfo__selects"></div> {/* //add components */}
            <div className="userDetailsInfo__tests">
                <div className="userDetailsInfo__tests-info"></div>
                <div className="userDetailsInfo__tests-info"></div>
                <TestBoard tests={tests}/>
            </div>
            <div className='userDetailsInfo__footer'>
              <div className="userDetailsInfo__footer-title">Average</div>
              <div className="userDetailsInfo__footer-score">{addColorScore(score)}</div>
              <div className="userDetailsInfo__footer-speed">{addColorSpeed(speed)}</div>
            </div>
    </div>
  )
}
