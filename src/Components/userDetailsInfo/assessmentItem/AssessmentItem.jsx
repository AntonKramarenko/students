import { useState } from 'react'
import './AssessmentItem.scss'

export const AssessmentItem = ({test, index}) => {
	const {absent, concept, date, expSpeed,label,score,speed,total} = {...test}
	const [ isAbsent,setIsAbsent ]= useState(absent)

	return (
		<tr className={isAbsent? 'assessmentItem absent' : 'assessmentItem'}>
			<td>{index+1}.</td>
			<td>{label}</td>
			<td>{score ? score : 'NIL'}</td>
			<td>{speed ? speed : 'NIL'}</td>
			<td>{total}</td>
			<td>{expSpeed}</td>
			<td>{concept}</td>
			<td>{date}</td>
			<td className='assessmentItem__checkbox'>
				<input 
					type='checkbox' 
					checked={isAbsent} 
					disabled={isAbsent}
					onClick={() => setIsAbsent(!isAbsent)} 
				/>
			</td>
		</tr>
    
	)
}
