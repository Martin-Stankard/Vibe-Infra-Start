import React, { useEffect, useState } from 'react';

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
