import { CSVLink, CSVDownload } from "react-csv";
import './ExportSCV.scss'
import { HiDocumentDownload } from "react-icons/hi";

export const ExportSCV = ({info, headers, nameExport}) => {

  console.log(nameExport);
  const csvReport = {
    headers: headers,
    data: info
  }

  return (
    <div className='exportSCV'>
        <HiDocumentDownload/>
        <CSVLink  
          {...csvReport}
          filename={nameExport}
        >Export SCV</CSVLink>      
    </div>
  )
}
