import './ClearButton.scss'
import {IoClose} from 'react-icons/io5'

export const ClearButton = ({name}) => {
	return (
		<div className='clearButton'>
			<IoClose/>
			<div className='clearButton__title'>{name}</div>
		</div>
	)
}
