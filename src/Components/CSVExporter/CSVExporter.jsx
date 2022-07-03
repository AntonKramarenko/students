import { CSVLink } from "react-csv";
import { HiDocumentDownload } from "react-icons/hi";
import './CSVExporter.scss'

export const CSVExporter = ({info, headers, nameExport}) => {
  const csvReport = {
    headers: headers,
    data: info
  }
  return (
    <div className='CSVExporter'>
        <HiDocumentDownload/>
        <CSVLink  
          {...csvReport}
          filename={nameExport}
        >Export SCV</CSVLink>      
    </div>
  )
}
