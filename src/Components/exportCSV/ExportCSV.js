import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function ExportCSV() {
    const url = 'https://test-task-j.herokuapp.com/data?page=1&size=10'
    const [json, setJson] = useState("");
    const [csv, setCsv] = useState("");

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setJson(data)))
    }, [])

    const dowload = () => {
        const stringifyJson = JSON.stringify(json.data);
        const a = JSON.parse(stringifyJson)
        if (
            !Array.isArray(a) ||
            !a.every((p) => typeof p === "object" && p !== null)
        ) {
            return;
        }
        const body = a.map((j) => Object.values(j).join(';')).join("\r\n");
        setCsv(body)

    }
    return (
        <CSVLink data={csv} onClick={dowload}>Download SCV</CSVLink>
        // <div>t</div>
    )
}

export default ExportCSV
