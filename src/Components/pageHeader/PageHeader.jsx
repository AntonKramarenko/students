import { useState } from 'react';
import { CustomSearch } from '../customSearch/CustomSearch';
import './PageHeader.scss';

export const PageHeader = ({search,setSearch,pageName}) => {
  return (
    <div className='pageHeader'>
        <h1 className="pageHeader__title">{pageName}</h1>
        <CustomSearch search={search} setSearch={setSearch}/>
        <div className="pageHeader__export">__Export</div>
    </div>
  )
}
