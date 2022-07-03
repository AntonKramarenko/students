export const addColorScore = (value) => {
    let num = +value.split('%').join('')

    if (num >= 90)
        return <span className='result-exellent'>{num}</span>
    else if (num < 90 && num >= 80)
        return <span className='result-good'>{num}</span>
    else if (num < 80 && num >= 50)
        return <span className='result-weak'>{num}</span>
    else
        return <span className='result-unsatisfactory'>{num}</span>
}

export const addColorSpeed = (value) => {
    switch (value.toLowerCase()) {
        case 'above expected':
            return <span className='result-exellent'>{value}</span>
        case 'as expected':
            return <span className='result-good'>{value}</span>
        case 'below expected':
            return <span className='result-unsatisfactory'>{value}</span>;
        default: return null
    }
}