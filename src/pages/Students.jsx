import { useState } from "react"
import { PageHeader } from "../components/pageHeader/PageHeader"


export const Students = () => {
    const [search, setSearch] = useState('')

    console.log(search)
    
  return (
    <>
        <PageHeader pageName='Students' search={search} setSearch={setSearch}/>
    </>
  )
}
