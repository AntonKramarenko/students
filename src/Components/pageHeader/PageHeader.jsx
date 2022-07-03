import { useSelector } from 'react-redux'
import { CustomSearch } from '../customSearch/CustomSearch'
import { CSVExporter } from '../CSVExporter/CSVExporter'
import './PageHeader.scss'

export const PageHeader = ({pageName}) => {
	const allStudents = useSelector(state => state.students.students)

	const headers =[
		{ label: 'Name', key: 'name' },
		{ label: 'ID', key: 'id' },
		{ label: 'Class', key: 'class' },
		{ label: 'Av. Score, %', key: 'score' },
		{ label: 'Av. Speed', key: 'speed' },
		{ label: 'Parents', key: 'parents' }
	]
	return (
		<div className='pageHeader'>
			<h1 className='pageHeader__title'>{pageName}</h1>
			<CustomSearch placeholder='Enter Student Name, Parent or ID here' />
			<CSVExporter info={allStudents} headers={headers} nameExport='AllUsers'/>
		</div>
	)
}
