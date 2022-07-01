import './ExportSCV.scss'
import { HiDocumentDownload } from "react-icons/hi";
import { setCurrentPage } from '../../store/paginations';

export const ExportSCV = () => {



  return (
    <div className='exportSCV'>
        <HiDocumentDownload/>
        Export SCV       
    </div>
  )
}
