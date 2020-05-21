import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
const ExportCSV = ({csvData, fileName}) => {
    return (
        <button>
            <CSVLink data={csvData} filename={fileName}>Сохранить список слов</CSVLink>
        </button>
    )
}

export default ExportCSV;
