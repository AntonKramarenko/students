import './TestHeader.scss'

export const TestHeader = () => {
  const testHeaderTitle =['#','Test Label','Score','Speed','Total Q-ns','Exp. Speed','Concept','Date','Absent']

  return (
    <tr className='testHeader'>
      {testHeaderTitle.map(title => <td key={title}>{title}</td> )}
    </tr>
  )
}