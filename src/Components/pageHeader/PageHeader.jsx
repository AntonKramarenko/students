import { useState } from 'react';
import { CustomSearch } from '../customSearch/CustomSearch';
import { ExportSCV } from '../exportCSV/ExportSCV';
import './PageHeader.scss';

export const PageHeader = ({pageName}) => {
  return (
    <div className='pageHeader'>
        <h1 className="pageHeader__title">{pageName}</h1>
        <CustomSearch placeholder='Enter Student Name, Parent or ID here' />
        <ExportSCV/>
    </div>
  )
}
