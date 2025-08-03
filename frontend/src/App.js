import React, { useEffect, useState } from 'react';

/**
 * TabbedExcelView displays MongoDB records in a tabbed, Excel-like table view.
 * Each tab represents a record, and clicking a tab shows the record's details.
 *
 * @component
 * @param {Object[]} records - Array of record objects to display.
 * @returns {JSX.Element} Tabbed table view of records.
 */
function TabbedExcelView({ records }) {
  const [active, setActive] = useState(0);
  if (!records.length) return <div>No records</div>;
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {records.map((rec, idx) => (
          <button key={idx} onClick={() => setActive(idx)}>
            Record {idx + 1}
          </button>
        ))}
      </div>
      <table border="1" cellPadding="4" style={{ marginTop: 10 }}>
        <tbody>
          {Object.entries(records[active]).map(([key, val]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{JSON.stringify(val)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * JsdocDocsView fetches and displays the contents of files from the jsdoc/docs directory.
 * Each file is shown with its name and content in a preformatted block.
 *
 * @component
 * @returns {JSX.Element} List of jsdoc/docs files and their contents.
 */
function JsdocDocsView() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/jsdocdocs')
      .then(res => res.json())
      .then(setDocs);
  }, []);
  return (
    <div>
      <h2>jsdoc/docs Files</h2>
      {docs.map(doc => (
        <div key={doc.name}>
          <h3>{doc.name}</h3>
          <pre>{doc.content}</pre>
        </div>
      ))}
    </div>
  );
}

/**
 * App is the main React component for the frontend.
 * It manages tabs for viewing MongoDB records and jsdoc/docs files.
 * Fetches data from the backend and renders the appropriate view based on the selected tab.
 *
 * @component
 * @returns {JSX.Element} Main application UI.
 */
function App() {
  const [records, setRecords] = useState([]);
  const [tab, setTab] = useState('records');
  useEffect(() => {
    fetch('http://localhost:3001/records')
      .then(res => res.json())
      .then(setRecords);
  }, []);
  return (
    <div>
      <h1>MongoDB Records & JSDoc Docs</h1>
      <div>
        <button onClick={() => setTab('records')}>Records</button>
        <button onClick={() => setTab('jsdocdocs')}>jsdoc/docs</button>
      </div>
      {tab === 'records' ? <TabbedExcelView records={records} /> : <JsdocDocsView />}
    </div>
  );
}

export default App;
