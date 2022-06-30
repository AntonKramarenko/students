import { useState } from 'react';
import { CustomSearch } from '../customSearch/CustomSearch';
import './PageHeader.scss';

export const PageHeader = ({pageName}) => {
  return (
    <div className='pageHeader'>
        <h1 className="pageHeader__title">{pageName}</h1>
        <CustomSearch placeholder='Enter Student Name, Parent or ID here' />
        <div className="pageHeader__export">__Export</div>
    </div>
  )
}
