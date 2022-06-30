import './TestItem.scss'

export const TestItem = ({test, index}) => {
    
    const {absent, concept, date, expSpeed,label,score,speed,total} = {...test}


    // console.log(absent);

   

    return (
    <tr className='testItem'>
        <td>{index+1}.</td>
        <td>{label}</td>
        <td>{score ? score : 'NIL'}</td>
        <td>{speed ? speed : 'NIL'}</td>
        <td>{total}</td>
        <td>{expSpeed}</td>
        <td>{concept}</td>
        <td>{date}</td>
        <td className='testItem__checkbox'><input type="checkbox" checked={absent} disabled/></td>
    </tr>
    
  )
}
